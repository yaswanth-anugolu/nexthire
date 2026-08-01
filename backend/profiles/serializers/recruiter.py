from rest_framework import serializers

from profiles.models import RecruiterProfile


class RecruiterProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecruiterProfile
        fields = (
            "id",
            "user",
            "company",
            "profile_picture",
            "designation",
            "official_email",
            "linkedin_url",
            "profile_completed",
            "created_at",
            "updated_at",
        )
        read_only_fields = (
            "id",
            "user",
            "created_at",
            "updated_at",
        )