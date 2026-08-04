from django.shortcuts import render

# Create your views here.
from resumes.models import Resume
from jobs.models import Job

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.permissions import IsCandidate

from ai.recommendation.engine import recommend_jobs

from .serializers import RecommendationSerializer


class RecommendationView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsCandidate,
    ]

    def get(self, request):

        resume = Resume.objects.get(
            candidate=request.user
        )

        jobs = Job.objects.all()

        recommendations = recommend_jobs(
            resume.extracted_text,
            jobs,
        )

        data = []

        for item in recommendations:

            job = item["job"]

            data.append({

                "job_id": job.id,

                "title": job.title,

                "company": job.company.name,

                "match_score": item["score"],

                "matched_skills": item[
                    "matched_skills"
                ],

                "missing_skills": item[
                    "missing_skills"
                ],
            })

        serializer = RecommendationSerializer(
            data,
            many=True,
        )

        return Response(serializer.data)