from django.db import models

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey()
    comment = models.ForeignKey()
    text = models.CharField()
