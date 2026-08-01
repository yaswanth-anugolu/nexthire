from rest_framework import generics

from accounts.permissions import IsCandidate
from resumes.models import Resume
from resumes.serializers import ResumeSerializer
from resumes.parser import extract_resume_text
from screening.services.resume_parser import parse_resume
from screening.services.profile_builder import build_candidate_profile

class ResumeView(generics.RetrieveUpdateAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [IsCandidate]

    def get_object(self):
        resume, created = Resume.objects.get_or_create(
            candidate=self.request.user
        )
        return resume

    def perform_update(self, serializer):

        resume = serializer.save(candidate=self.request.user)

        if resume.resume_file:
            try:
                resume.parsing_status = Resume.ParsingStatus.PROCESSING
                resume.save(update_fields=["parsing_status"])

                extracted_text = extract_resume_text(
                    resume.resume_file.path
                )

                resume.extracted_text = extracted_text
                resume.parsing_status = Resume.ParsingStatus.COMPLETED

                resume.save(
                    update_fields=[
                        "extracted_text",
                        "parsing_status",
                    ]
                )

                parsed_data = parse_resume(
                    extracted_text
                )

                build_candidate_profile(
                    self.request.user,
                    parsed_data,
                )

            except Exception:
                resume.parsing_status = Resume.ParsingStatus.FAILED
                resume.save(update_fields=["parsing_status"])