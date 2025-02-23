from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import Task, Reclamation, Conversation, Message, Matiere, Avatar
from .serializers import TaskSerializer, ReclamationSerializer, ConversationSerializer, MessageSerializer, MatiereSerializer, AvatarSerializer

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Only return tasks related to the authenticated child user."""
        return Task.objects.filter(child__user=self.request.user)

    def perform_create(self, serializer):
        """Ensure the task is created for the authenticated child user."""
        serializer.save(child=self.request.user.child)

class ReclamationViewSet(viewsets.ModelViewSet):
    serializer_class = ReclamationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Only return reclamations submitted by the authenticated parent."""
        return Reclamation.objects.filter(parent__user=self.request.user)

    def perform_create(self, serializer):
        """Ensure the reclamation is created by the authenticated parent user."""
        serializer.save(parent=self.request.user.parent)

class ConversationViewSet(viewsets.ModelViewSet):
    serializer_class = ConversationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return conversations where the authenticated user is a parent or a child."""
        return Conversation.objects.filter(parent__user=self.request.user) | Conversation.objects.filter(child__user=self.request.user)

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return messages related to the authenticated user's conversations."""
        return Message.objects.filter(conversation__parent__user=self.request.user) | Message.objects.filter(conversation__child__user=self.request.user)

    def perform_create(self, serializer):
        """Ensure the sender of the message is the authenticated user."""
        serializer.save(sender=self.request.user)

class MatiereViewSet(viewsets.ModelViewSet):
    queryset = Matiere.objects.all()
    serializer_class = MatiereSerializer
    permission_classes = [IsAuthenticated]

class AvatarViewSet(viewsets.ModelViewSet):
    serializer_class = AvatarSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return only the avatar of the authenticated user."""
        return Avatar.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """Ensure the avatar is linked to the authenticated user."""
        serializer.save(user=self.request.user)
