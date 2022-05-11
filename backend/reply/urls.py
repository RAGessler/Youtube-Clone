from django.urls import path, include
from . import views

urlpatterns = [
    path('<int:pk>/view', views.get_replies), #get
    path('<int:pk>/post', views.post_reply)
]