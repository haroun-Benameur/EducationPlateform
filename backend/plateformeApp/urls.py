from django.urls import path
from .views import getTasks  # Import the view

urlpatterns = [
    path('tasks/', getTasks, name='get-tasks'),  # Define the endpoint
]