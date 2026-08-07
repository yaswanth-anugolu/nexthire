from rest_framework import generics
from rest_framework.exceptions import PermissionDenied

from accounts.permissions import IsCandidate
from applications.models import Application
from applications.serializers import ApplicationSerializer


from accounts.permissions import IsCandidate, IsRecruiter

class ApplicationListCreateView(generics.ListCreateAPIView):
    serializer_class = ApplicationSerializer

    def get_permissions(self):

        if self.request.method == "POST":
            return [IsCandidate()]

        if self.request.user.role == "RECRUITER":
            return [IsRecruiter()]

        return [IsCandidate()]

    def get_queryset(self):

        if self.request.user.role == "RECRUITER":

            return Application.objects.filter(
                job__company__recruiters__user=self.request.user
            )

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
    def get_permissions(self):

        if self.request.user.role == "RECRUITER":
            return [IsRecruiter()]

        return [IsCandidate()]

    def get_queryset(self):

        if self.request.user.role == "RECRUITER":

            return Application.objects.filter(
                job__company__recruiters__user=self.request.user
            )

        return Application.objects.filter(
            candidate=self.request.user
        )
    
    