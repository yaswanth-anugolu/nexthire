from rest_framework import generics

from accounts.permissions import IsRecruiter
from profiles.models import RecruiterProfile
from profiles.serializers import RecruiterProfileSerializer


class RecruiterProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = RecruiterProfileSerializer
    permission_classes = [IsRecruiter]

    def get_object(self):
        profile, created = RecruiterProfile.objects.get_or_create(
            user=self.request.user
        )
        return profile