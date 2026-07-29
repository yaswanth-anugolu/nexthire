from rest_framework import generics
from .models import Resume
from .serializers import ResumeSerializer
from accounts.permissions import IsCandidate


class ResumeView(generics.RetrieveUpdateAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [IsCandidate]

    def get_object(self):
        resume, created = Resume.objects.get_or_create(
            candidate=self.request.user
        )
        return resume

    def perform_update(self, serializer):
        serializer.save(candidate=self.request.user)