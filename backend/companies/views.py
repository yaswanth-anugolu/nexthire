from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions

from .models import Company
from .serializers import CompanySerializer


class CompanyListCreateView(generics.ListCreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Company.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)