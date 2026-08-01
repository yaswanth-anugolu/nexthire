from rest_framework import generics
from rest_framework.exceptions import PermissionDenied

from accounts.permissions import IsRecruiter
from jobs.models import Job
from jobs.serializers import JobSerializer


class JobListCreateView(generics.ListCreateAPIView):
    serializer_class = JobSerializer
    permission_classes = [IsRecruiter]

    def get_queryset(self):
        return Job.objects.filter(
            company__owner=self.request.user
        )

    def perform_create(self, serializer):
        company = serializer.validated_data.get("company")

        if company.owner != self.request.user:
            raise PermissionDenied(
                "You cannot create jobs for another company's account."
            )

        serializer.save()


class JobDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobSerializer
    permission_classes = [IsRecruiter]

    def get_queryset(self):
        return Job.objects.filter(
            company__owner=self.request.user
        )

    def perform_update(self, serializer):
        company = serializer.validated_data.get(
            "company",
            serializer.instance.company,
        )

        if company.owner != self.request.user:
            raise PermissionDenied(
                "You cannot assign this job to another company's account."
            )

        serializer.save()

    def perform_destroy(self, instance):
        if instance.company.owner != self.request.user:
            raise PermissionDenied(
                "You cannot delete this job."
            )

        instance.delete()