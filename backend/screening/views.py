from django.shortcuts import get_object_or_404

from rest_framework import generics, status
from rest_framework.response import Response
from ai.comparison.candidate_comparison import compare_candidates
from applications.models import Application
from ai.interview.question_generator import (
    generate_interview_questions,
)
from .models import ScreeningResult
from .serializers import (
    ScreeningResultSerializer,
    CandidateRankingSerializer,
    InterviewQuestionRequestSerializer,
    InterviewQuestionResponseSerializer,
)
from ai.ats.engine import calculate_match_score
from ai.resume.parser import parse_resume
from ai.resume.pdf_extractor import extract_text_from_pdf

from ai_ml import (
    extract_features,
    predict_candidate,
)

from accounts.permissions import IsRecruiter

from ai.comparison.candidate_comparison import (
    compare_candidates,
)

from screening.serializers import (
    CandidateComparisonSerializer,
    CandidateComparisonResponseSerializer,
)
class ScreenResumeView(generics.GenericAPIView):

    def post(self, request, application_id):

        application = get_object_or_404(
            Application,
            id=application_id,
        )

        if not application.resume:
            return Response(
                {
                    "error": "Resume not uploaded."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        resume_text = extract_text_from_pdf(
            application.resume.path
        )

        parsed_resume = parse_resume(
            resume_text
        )

        result = calculate_match_score(
            resume_text,
            application.job.description,
        )

        features = extract_features(
            parsed_resume,
            result["score"],
        )

        prediction = predict_candidate(
            features
        )

        screening_result, created = (
            ScreeningResult.objects.update_or_create(
                application=application,
                defaults={

                    "match_score": result["score"],

                    "matched_skills": result[
                        "matched_skills"
                    ],

                    "missing_skills": result[
                        "missing_skills"
                    ],

                    "recommendation": (

                        "Highly Recommended"

                        if result["score"] >= 80

                        else "Recommended"

                        if result["score"] >= 60

                        else "Not Recommended"

                    ),

                    "ml_prediction": prediction[
                        "prediction"
                    ],

                    "ml_confidence": prediction[
                        "confidence"
                    ],
                },
            )
        )

        serializer = ScreeningResultSerializer(
            screening_result
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )


class CandidateRankingView(generics.GenericAPIView):

    def get(self, request, job_id):

        screening_results = (
            ScreeningResult.objects
            .filter(application__job_id=job_id)
            .select_related(
                "application",
                "application__candidate",
            )
            .order_by("-match_score")
        )

        rankings = []

        for index, result in enumerate(
            screening_results,
            start=1,
        ):

            rankings.append({

                "rank": index,

                "candidate": result.application.candidate.name,

                "email": result.application.candidate.email,

                "match_score": result.match_score,

                "recommendation": result.recommendation,

            })

        serializer = CandidateRankingSerializer(
            rankings,
            many=True,
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )
class CandidateComparisonView(generics.GenericAPIView):

    permission_classes = [IsRecruiter]

    serializer_class = CandidateComparisonSerializer

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        result = compare_candidates(
            serializer.validated_data[
                "application_ids"
            ]
        )

        response = (
            CandidateComparisonResponseSerializer(
                result
            )
        )

        return Response(
            response.data,
            status=status.HTTP_200_OK,
        )

class InterviewQuestionGeneratorView(
    generics.GenericAPIView
):

    permission_classes = [
        IsRecruiter
    ]

    serializer_class = (
        InterviewQuestionRequestSerializer
    )

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        application = get_object_or_404(
            Application,
            id=serializer.validated_data[
                "application_id"
            ],
        )

        questions = (
            generate_interview_questions(
                application
            )
        )

        response = (
            InterviewQuestionResponseSerializer(
                questions
            )
        )

        return Response(
            response.data,
            status=status.HTTP_200_OK,
        )