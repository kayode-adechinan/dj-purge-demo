from django.urls import path
from showcase import views

urlpatterns = [
    path("", views.IndexView.as_view()),
]
