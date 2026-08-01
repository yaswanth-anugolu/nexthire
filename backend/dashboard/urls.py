from django.urls import path

from .views import RecruiterDashboardView

urlpatterns = [
    path(
        "recruiter/",
        RecruiterDashboardView.as_view(),
        name="recruiter-dashboard",
    ),
]