from rest_framework import generics

from accounts.permissions import IsCandidate
from profiles.models import CandidateProfile
from profiles.serializers import CandidateProfileSerializer


class CandidateProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = CandidateProfileSerializer
    permission_classes = [IsCandidate]

    def get_object(self):
        profile, created = CandidateProfile.objects.get_or_create(
            user=self.request.user
        )
        return profile