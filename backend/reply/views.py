from xml.dom.minidom import Element
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_replies(request, pk):
    replies = Reply.objects.filter(comment=pk)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
