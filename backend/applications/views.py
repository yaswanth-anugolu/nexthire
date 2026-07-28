from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from .models import Application
from .serializers import ApplicationSerializer


class ApplicationListCreateView(generics.ListCreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Application.objects.filter(candidate=self.request.user)

    def perform_create(self, serializer):
        serializer.save(candidate=self.request.user)