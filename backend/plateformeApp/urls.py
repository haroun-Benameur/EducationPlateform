from django.urls import path
from .views import getTasks,getChild 

urlpatterns = [
    path('tasks/', getTasks, name='get-tasks'),  
    path('child/<int:child_id>/', getChild, name='get_child'),
]