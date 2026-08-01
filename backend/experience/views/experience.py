from rest_framework import generics

from accounts.permissions import IsCandidate
from experience.models import Experience
from experience.serializers import ExperienceSerializer


class ExperienceListCreateView(generics.ListCreateAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Experience.objects.filter(
            candidate=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            candidate=self.request.user
        )


class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Experience.objects.filter(
            candidate=self.request.user
        )