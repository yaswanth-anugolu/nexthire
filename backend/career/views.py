from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from resumes.models import Resume

from ai.career.career_assistance import career_assistant


class CareerAssistantView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        question = request.data.get("question")

        resume = Resume.objects.get(
            candidate=request.user
        )

        answer = career_assistant(
            resume.extracted_text,
            question,
        )

        return Response({
            "answer": answer
        })