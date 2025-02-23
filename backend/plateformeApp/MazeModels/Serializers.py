from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..MazeModels import Quiz, Question, Maze
from ..serializers import QuizSerializer, QuestionSerializer, MazeSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [IsAuthenticated]

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

class MazeViewSet(viewsets.ModelViewSet):
    queryset = Maze.objects.all()
    serializer_class = MazeSerializer
    permission_classes = [IsAuthenticated]
