from rest_framework import generics

from accounts.permissions import IsRecruiter
from companies.models import Company
from companies.serializers import CompanySerializer


class CompanyListCreateView(generics.ListCreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [IsRecruiter]

    def get_queryset(self):
     return Company.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CompanySerializer
    permission_classes = [IsRecruiter]

    def get_queryset(self):
     return Company.objects.filter(owner=self.request.user)