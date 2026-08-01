from rest_framework import generics
from rest_framework.response import Response

from companies.models import Company

from dashboard.serializers import RecruiterDashboardSerializer
from dashboard.services.dashboard import get_recruiter_dashboard


class RecruiterDashboardView(generics.GenericAPIView):

    serializer_class = RecruiterDashboardSerializer

    def get(self, request):

        company = Company.objects.first()

        dashboard = get_recruiter_dashboard(
            company
        )

        serializer = self.get_serializer(
            dashboard
        )

        return Response(serializer.data)