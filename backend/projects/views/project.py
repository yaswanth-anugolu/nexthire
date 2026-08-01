from rest_framework import generics

from accounts.permissions import IsCandidate
from projects.models import Project
from projects.serializers import ProjectSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Project.objects.filter(candidate=self.request.user)

    def perform_create(self, serializer):
        serializer.save(candidate=self.request.user)


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Project.objects.filter(candidate=self.request.user)