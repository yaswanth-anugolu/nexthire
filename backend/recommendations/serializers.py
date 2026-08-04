from rest_framework import serializers


class RecommendationSerializer(serializers.Serializer):

    job_id = serializers.IntegerField()

    title = serializers.CharField()

    company = serializers.CharField()

    match_score = serializers.FloatField()

    matched_skills = serializers.ListField(
        child=serializers.CharField()
    )

    missing_skills = serializers.ListField(
        child=serializers.CharField()
    )