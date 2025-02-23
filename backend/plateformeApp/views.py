from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from django.shortcuts import get_object_or_404

from .models import Task,Child
from .serializers.TaskSerializer import TaskSerializer  # Ensure this is a class, not a module
@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all()  # Fetch all tasks from the database
    serializer = TaskSerializer(tasks, many=True)  # Serialize the queryset
    return Response(serializer.data)  # Return the serialized data


def getChild(request, child_id):
    # Retrieve the Child object by ID
    child = get_object_or_404(Child, id=child_id)

    # Prepare the response data
    response_data = {
        'id': child.id,
        'niveauEtude': child.niveauEtude,
        'level': child.get_level_display(),  # Get the human-readable level
    }

    return JsonResponse(response_data)