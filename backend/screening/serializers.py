from rest_framework import serializers
from .models import ScreeningResult

class ScreeningResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScreeningResult
        fields = "__all__"
    ml_prediction = serializers.CharField(
        read_only=True
    )

    ml_confidence = serializers.FloatField(
        read_only=True
    )

class CandidateRankingSerializer(serializers.Serializer):
    rank = serializers.IntegerField()
    candidate = serializers.CharField()
    email = serializers.EmailField()
    match_score = serializers.FloatField()
    recommendation = serializers.CharField()
class CandidateComparisonSerializer(serializers.Serializer):

    application_ids = serializers.ListField(
        child=serializers.IntegerField(),
        min_length=2,
    )


class CandidateComparisonResponseSerializer(serializers.Serializer):

    comparison = serializers.CharField()
class InterviewQuestionRequestSerializer(
    serializers.Serializer
):
    application_id = serializers.IntegerField()


class InterviewQuestionResponseSerializer(
    serializers.Serializer
):
    technical = serializers.ListField(
        child=serializers.CharField()
    )

    project = serializers.ListField(
        child=serializers.CharField()
    )

    behavioral = serializers.ListField(
        child=serializers.CharField()
    )

    hr = serializers.ListField(
        child=serializers.CharField()
    )