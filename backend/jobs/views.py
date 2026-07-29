from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from .models import Job
from .serializers import JobSerializer
from accounts.permissions import IsRecruiter


class JobListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsRecruiter]

    def perform_create(self, serializer):
        company = serializer.validated_data["company"]

        if company.owner != self.request.user:
            raise PermissionDenied(
                "You can only create jobs for your own company."
            )

        serializer.save()