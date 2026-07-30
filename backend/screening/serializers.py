from rest_framework import serializers

from .models import ScreeningResult


class ScreeningResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScreeningResult
        fields = "__all__"
        read_only_fields = (
            "match_score",
            "matched_skills",
            "missing_skills",
            "recommendation",
            "screened_at",
        )