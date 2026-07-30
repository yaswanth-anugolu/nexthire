from rest_framework import generics
from .models import Resume
from .serializers import ResumeSerializer
from accounts.permissions import IsCandidate
from .parser import extract_resume_text

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
                extracted_text = extract_resume_text(
                    resume.resume_file.path
                )

                resume.extracted_text = extracted_text
                resume.save(update_fields=["extracted_text"])

            except Exception as e:
                print(f"Resume parsing failed: {e}")