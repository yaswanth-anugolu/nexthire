from django.urls import path

from .views import (
    StartInterviewView,
    SubmitAnswerView,
    InterviewReportView
)

urlpatterns = [

    path(
        "start/<int:application_id>/",
        StartInterviewView.as_view(),
        name="start-interview",
    ),

    path(
        "answer/<int:question_id>/",
        SubmitAnswerView.as_view(),
        name="submit-answer",
    ),
    path(
        "report/<int:session_id>/",
        InterviewReportView.as_view(),
        name="interview-report",
    ),

]