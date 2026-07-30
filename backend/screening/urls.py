from django.urls import path

from .views import (
    ScreenResumeView,
    CandidateRankingView,
)

urlpatterns = [
    path("<int:application_id>/",ScreenResumeView.as_view(),name="screen-resume",),
    path("job/<int:job_id>/ranking/",CandidateRankingView.as_view(),name="candidate-ranking",),
]