from django.urls import path
from .views import CareerAssistantView

urlpatterns = [
    path(
        "",
        CareerAssistantView.as_view(),
        name="career-assistant",
    ),
]