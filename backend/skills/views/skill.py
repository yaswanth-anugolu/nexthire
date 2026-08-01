from rest_framework import generics

from accounts.permissions import IsCandidate
from skills.models import Skill
from skills.serializers import SkillSerializer


class SkillListCreateView(generics.ListCreateAPIView):
    serializer_class = SkillSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Skill.objects.filter(candidate=self.request.user)

    def perform_create(self, serializer):
        serializer.save(candidate=self.request.user)


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SkillSerializer
    permission_classes = [IsCandidate]

    def get_queryset(self):
        return Skill.objects.filter(candidate=self.request.user)