from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.serializers import LoginSerializer


class LoginView(APIView):

    authentication_classes = []
    permission_classes = []

    def post(self, request):

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        return Response(
            {
                "message": "Login successful.",
                "refresh": serializer.validated_data["refresh"],
                "access": serializer.validated_data["access"],
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "name": user.name,
                    "email": user.email,
                    "role": user.role,
                },
            },
            status=status.HTTP_200_OK,
        )
