from django.urls import path

from .views import (
    EducationListCreateView,
    EducationDetailView,
)

urlpatterns = [
    path(
        "",
        EducationListCreateView.as_view(),
        name="education-list-create",
    ),
    path(
        "<int:pk>/",
        EducationDetailView.as_view(),
        name="education-detail",
    ),
]