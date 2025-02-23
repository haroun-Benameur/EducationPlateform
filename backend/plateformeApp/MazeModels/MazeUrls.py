from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .. import QuizViewSet, QuestionViewSet, MazeViewSet

router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'mazes', MazeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
