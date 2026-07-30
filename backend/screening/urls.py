from django.urls import path

from .views import ScreenResumeView

urlpatterns = [
    path(
        "<int:application_id>/",
        ScreenResumeView.as_view(),
        name="screen-resume",
    ),
]