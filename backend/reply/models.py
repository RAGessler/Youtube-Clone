from django.db import models
from authentication.models import User
from comment.models import Comment

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User)
    comment = models.ForeignKey(Comment)
    text = models.CharField()
