from rest_framework import serializers


class OverviewSerializer(serializers.Serializer):

    total_jobs = serializers.IntegerField()

    active_jobs = serializers.IntegerField()

    applications = serializers.IntegerField()

    screened_candidates = serializers.IntegerField()

    average_ats_score = serializers.FloatField()

    highly_recommended = serializers.IntegerField()


class TopCandidateSerializer(serializers.Serializer):

    candidate = serializers.CharField()

    email = serializers.EmailField()

    job = serializers.CharField()

    score = serializers.FloatField()

    recommendation = serializers.CharField()


class RecentApplicationSerializer(serializers.Serializer):

    candidate = serializers.CharField()

    job = serializers.CharField()

    status = serializers.CharField()

    applied_at = serializers.DateTimeField()


class RecentJobSerializer(serializers.Serializer):

    title = serializers.CharField()

    location = serializers.CharField()

    employment_type = serializers.CharField()

    status = serializers.CharField()

    deadline = serializers.DateField()


class RecruiterDashboardSerializer(serializers.Serializer):

    overview = OverviewSerializer()

    top_candidates = TopCandidateSerializer(
        many=True
    )

    recent_applications = RecentApplicationSerializer(
        many=True
    )

    recent_jobs = RecentJobSerializer(
        many=True
    )