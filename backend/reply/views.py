from xml.dom.minidom import Element
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer
from backend.reply import serializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_replies(request, pk):
    reply_comment_param = request.query_params.get('comment')
    replies = Reply.objects.all()
    custom_response_dictionary = {}
    if reply_comment_param == int(pk):

    
