from rest_framework import serializers
from .models import ScreeningResult


class ScreeningResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScreeningResult
        fields = "__all__"


class CandidateRankingSerializer(serializers.Serializer):
    rank = serializers.IntegerField()
    candidate = serializers.CharField()
    email = serializers.EmailField()
    match_score = serializers.FloatField()
    recommendation = serializers.CharField()