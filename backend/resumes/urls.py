from django.urls import path

from .views.resume import ResumeView

urlpatterns = [
    path(
        "",
        ResumeView.as_view(),
        name="resume",
    ),
]