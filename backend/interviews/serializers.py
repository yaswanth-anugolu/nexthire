from rest_framework import serializers

from .models import (
    InterviewSession,
    InterviewRound,
    InterviewQuestion,
    InterviewAnswer,
)


class InterviewQuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = InterviewQuestion
        fields = (
            "id",
            "question",
            "marks",
            "order",
        )


class InterviewRoundSerializer(serializers.ModelSerializer):

    questions = InterviewQuestionSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = InterviewRound
        fields = (
            "id",
            "round_type",
            "score",
            "questions",
        )


class InterviewSessionSerializer(serializers.ModelSerializer):

    rounds = InterviewRoundSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = InterviewSession
        fields = (
            "id",
            "candidate",
            "application",
            "job",
            "status",
            "overall_score",
            "started_at",
            "completed_at",
            "rounds",
        )

        read_only_fields = (
            "candidate",
            "overall_score",
            "started_at",
            "completed_at",
        )


class InterviewAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = InterviewAnswer
        fields = (
            "id",
            "question",
            "answer",
            "ai_score",
            "ai_feedback",
            "evaluated_at",
        )

        read_only_fields = (
            "ai_score",
            "ai_feedback",
            "evaluated_at",
        )