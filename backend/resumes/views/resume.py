from rest_framework import generics, status
from rest_framework.response import Response

from accounts.permissions import IsCandidate
from resumes.models import Resume
from resumes.serializers import ResumeSerializer
from resumes.parser import extract_resume_text
from ai.resume.parser import parse_resume
from ai.resume.profile_builder import build_candidate_profile


class ResumeView(generics.GenericAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [IsCandidate]

    def get(self, request):

        try:
            resume = Resume.objects.get(
                candidate=request.user
            )

            serializer = self.get_serializer(
                resume
            )

            return Response(serializer.data)

        except Resume.DoesNotExist:

            return Response(
                {
                    "detail": "Resume not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

    def post(self, request):

        if Resume.objects.filter(
            candidate=request.user
        ).exists():

            return Response(
                {
                    "detail": "Resume already exists."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        resume = serializer.save(
            candidate=request.user
        )

        self.process_resume(
            resume
        )

        return Response(
            ResumeSerializer(resume).data,
            status=status.HTTP_201_CREATED,
        )

    def patch(self, request):

        try:
            resume = Resume.objects.get(
                candidate=request.user
            )

        except Resume.DoesNotExist:

            return Response(
                {
                    "detail": "Resume not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = self.get_serializer(
            resume,
            data=request.data,
            partial=True,
        )

        serializer.is_valid(
            raise_exception=True
        )

        resume = serializer.save()

        self.process_resume(
            resume
        )

        return Response(
            ResumeSerializer(resume).data
        )

    def delete(self, request):

        try:
            resume = Resume.objects.get(
                candidate=request.user
            )

        except Resume.DoesNotExist:

            return Response(
                {
                    "detail": "Resume not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        if resume.resume_file:

            resume.resume_file.delete(
                save=False
            )

        resume.delete()

        return Response(
            status=status.HTTP_204_NO_CONTENT
        )

    def process_resume(
        self,
        resume,
    ):

        if not resume.resume_file:
            return

        try:

            resume.parsing_status = (
                Resume.ParsingStatus.PROCESSING
            )

            resume.save(
                update_fields=[
                    "parsing_status"
                ]
            )

            extracted_text = extract_resume_text(
                resume.resume_file.path
            )

            resume.extracted_text = extracted_text

            resume.parsing_status = (
                Resume.ParsingStatus.COMPLETED
            )

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
                resume.candidate,
                parsed_data,
            )

        except Exception:

            resume.parsing_status = (
                Resume.ParsingStatus.FAILED
            )

            resume.save(
                update_fields=[
                    "parsing_status"
                ]
            )