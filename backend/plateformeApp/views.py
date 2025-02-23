from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers.TaskSerializer import TaskSerializer  # Ensure this is a class, not a module
@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all()  # Fetch all tasks from the database
    serializer = TaskSerializer(tasks, many=True)  # Serialize the queryset
    return Response(serializer.data)  # Return the serialized data