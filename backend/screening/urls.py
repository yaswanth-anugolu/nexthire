from django.urls import path

from .views import (
    ScreenResumeView,
    CandidateRankingView,
    CandidateComparisonView,
    InterviewQuestionGeneratorView,
)

urlpatterns = [
    path(
        "<int:application_id>/",
        ScreenResumeView.as_view(),
        name="screen-resume",
    ),

    path(
        "job/<int:job_id>/ranking/",
        CandidateRankingView.as_view(),
        name="candidate-ranking",
    ),

    path(
        "compare/",
        CandidateComparisonView.as_view(),
        name="candidate-comparison",
    ),
    path(
    "interview/questions/",
    InterviewQuestionGeneratorView.as_view(),
    name="interview-question-generator",
    ),
]