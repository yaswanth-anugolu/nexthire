from rest_framework import generics

from accounts.permissions import IsCandidate
from certifications.models import Certification
from certifications.serializers import CertificationSerializer


class CertificationListCreateView(generics.ListCreateAPIView):
    serializer_class = CertificationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Certification.objects.filter(
            candidate=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            candidate=self.request.user
        )


class CertificationDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CertificationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Certification.objects.filter(
            candidate=self.request.user
        )