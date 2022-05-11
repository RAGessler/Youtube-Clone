from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_replies(request)
