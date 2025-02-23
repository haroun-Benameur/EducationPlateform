from django.urls import path
from .views import getTasks,getChild  # Import the view

urlpatterns = [
    path('tasks/', getTasks, name='get-tasks'),  
    path('child/<int:child_id>/', getChild, name='get_child'),
]