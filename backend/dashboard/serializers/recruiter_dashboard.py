from rest_framework import serializers


class RecruiterDashboardSerializer(serializers.Serializer):

    total_jobs = serializers.IntegerField()

    active_jobs = serializers.IntegerField()

    applications = serializers.IntegerField()

    screened_candidates = serializers.IntegerField()

    average_ats_score = serializers.FloatField()

    highly_recommended = serializers.IntegerField()