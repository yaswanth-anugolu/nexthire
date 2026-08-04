from django.db import transaction
from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .services.report import generate_interview_report

from accounts.permissions import IsCandidate
from applications.models import Application

from ai.interview.question_generator import (
    generate_interview_questions,
)
from ai.interview.answer_evaluator import (
    evaluate_answer,
)

from .models import (
    InterviewSession,
    InterviewRound,
    InterviewQuestion,
    InterviewAnswer,
)

from .serializers import (
    InterviewSessionSerializer,
    InterviewAnswerSerializer,
)


class StartInterviewView(generics.GenericAPIView):

    permission_classes = [
        IsAuthenticated,
        IsCandidate,
    ]

    @transaction.atomic
    def post(self, request, application_id):

        application = get_object_or_404(
            Application,
            id=application_id,
            candidate=request.user,
        )

        session = InterviewSession.objects.create(
            candidate=request.user,
            application=application,
            job=application.job,
            status=InterviewSession.Status.IN_PROGRESS,
        )

        interview = generate_interview_questions(
            application
        )

        for round_type in (
            InterviewRound.RoundType.APTITUDE,
            InterviewRound.RoundType.TECHNICAL,
            InterviewRound.RoundType.HR,
        ):

            interview_round = InterviewRound.objects.create(
                session=session,
                round_type=round_type,
            )

            questions = interview.get(
                round_type.lower(),
                [],
            )

            for index, item in enumerate(
                questions,
                start=1,
            ):

                InterviewQuestion.objects.create(
                    round=interview_round,
                    question=item["question"],
                    ideal_answer=item["ideal_answer"],
                    order=index,
                )

        serializer = InterviewSessionSerializer(
            session
        )

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
        )


class SubmitAnswerView(generics.GenericAPIView):

    permission_classes = [
        IsAuthenticated,
        IsCandidate,
    ]

    def post(
        self,
        request,
        question_id,
    ):

        question = get_object_or_404(
            InterviewQuestion,
            id=question_id,
        )

        # Candidate can answer only their own interview
        if question.round.session.candidate != request.user:
            return Response(
                {
                    "detail": "You cannot answer another candidate's interview question."
                },
                status=status.HTTP_403_FORBIDDEN,
            )

        # Interview already completed
        if (
            question.round.session.status
            == InterviewSession.Status.COMPLETED
        ):
            return Response(
                {
                    "detail": "Interview has already been completed."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Prevent duplicate answers
        if InterviewAnswer.objects.filter(
            question=question
        ).exists():
            return Response(
                {
                    "detail": "You have already answered this question."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        candidate_answer = request.data.get(
            "answer",
            "",
        )

        result = evaluate_answer(
            question.question,
            candidate_answer,
            question.ideal_answer,
        )

        answer = InterviewAnswer.objects.create(
            question=question,
            answer=candidate_answer,
            ai_score=result["score"],
            ai_feedback=result["feedback"],
        )

        serializer = InterviewAnswerSerializer(
            answer
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )


class InterviewReportView(generics.GenericAPIView):

    permission_classes = [
        IsAuthenticated,
        IsCandidate,
    ]

    def get(
        self,
        request,
        session_id,
    ):

        session = get_object_or_404(
            InterviewSession,
            id=session_id,
            candidate=request.user,
        )

        report = generate_interview_report(
            session
        )

        return Response(report)