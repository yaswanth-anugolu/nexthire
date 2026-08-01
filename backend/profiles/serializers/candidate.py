from rest_framework import serializers

from profiles.models import CandidateProfile


class CandidateProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = CandidateProfile
        fields = (
            "id",
            "user",
            "profile_picture",
            "headline",
            "bio",
            "date_of_birth",
            "gender",
            "current_location",
            "preferred_location",
            "experience_level",
            "current_job_title",
            "current_company",
            "expected_salary",
            "notice_period",
            "portfolio_url",
            "github_url",
            "linkedin_url",
            "leetcode_url",
            "resume",
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