from rest_framework import serializers

from applications.models import Application


class ApplicationSerializer(serializers.ModelSerializer):

    candidate_name = serializers.CharField(
        source="candidate.username",
        read_only=True,
    )

    job_title = serializers.CharField(
        source="job.title",
        read_only=True,
    )

    class Meta:
        model = Application
        fields = "__all__"

        read_only_fields = (
            "id",
            "candidate",
            "status",
            "ai_score",
            "recruiter_notes",
            "applied_at",
            "updated_at",
        )