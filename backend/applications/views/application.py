from rest_framework import generics
from rest_framework.exceptions import PermissionDenied

from accounts.permissions import IsCandidate
from applications.models import Application
from applications.serializers import ApplicationSerializer


class ApplicationListCreateView(generics.ListCreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Application.objects.filter(
            candidate=self.request.user
        )

    def perform_create(self, serializer):

        job = serializer.validated_data["job"]

        if job.status != "OPEN":
            raise PermissionDenied(
                "This job is not accepting applications."
            )

        if Application.objects.filter(
            candidate=self.request.user,
            job=job,
        ).exists():
            from rest_framework.exceptions import ValidationError

            raise ValidationError(
                {
                    "error": "You have already applied for this job."
                }
            )

        serializer.save(candidate=self.request.user)


class ApplicationDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Application.objects.filter(
            candidate=self.request.user
        )
    
    