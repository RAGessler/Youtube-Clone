from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.get_all_comments),
    path('all/<int:pk>/', views.get_all_comments)
]