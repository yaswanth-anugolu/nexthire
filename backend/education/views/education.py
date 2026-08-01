from rest_framework import generics

from accounts.permissions import IsCandidate
from education.models import Education
from education.serializers import EducationSerializer


class EducationListCreateView(generics.ListCreateAPIView):
    serializer_class = EducationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Education.objects.filter(
            candidate=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            candidate=self.request.user
        )


class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EducationSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Education.objects.filter(
            candidate=self.request.user
        )