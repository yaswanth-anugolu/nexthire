from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.response import Response

from applications.models import Application
from resumes.models import Resume

from .models import ScreeningResult
from .serializers import ScreeningResultSerializer
from .services import calculate_match_score


class ScreenResumeView(generics.GenericAPIView):

    def post(self, request, application_id):

        application = get_object_or_404(
            Application,
            id=application_id,
        )

        resume = get_object_or_404(
            Resume,
            candidate=application.candidate,
        )

        result = calculate_match_score(
            resume.extracted_text,
            application.job.description,
        )

        screening_result, created = (
            ScreeningResult.objects.update_or_create(
                application=application,
                defaults={
                    "match_score": result["score"],
                    "matched_skills": result["matched_skills"],
                    "missing_skills": result["missing_skills"],
                    "recommendation": (
                        "Highly Recommended"
                        if result["score"] >= 80
                        else "Recommended"
                        if result["score"] >= 60
                        else "Not Recommended"
                    ),
                },
            )
        )

        serializer = ScreeningResultSerializer(
            screening_result
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )