from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from companies.models import Company
from jobs.models import Job
from applications.models import Application
from screening.models import ScreeningResult


class RecruiterDashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        company = Company.objects.filter(
            owner=request.user
        ).first()

        if not company:

            return Response({
                "detail": "No company found."
            })

        jobs = Job.objects.filter(
            company=company
        )

        applications = Application.objects.filter(
            job__company=company
        )

        screenings = ScreeningResult.objects.filter(
            application__job__company=company
        )

        return Response({

            "jobs_posted": jobs.count(),

            "applications": applications.count(),

            "screenings": screenings.count(),

        })