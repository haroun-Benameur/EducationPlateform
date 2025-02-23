from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser


class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    



class Child(models.Model):
    class Level(models.TextChoices):
        BEGINNER = 'BE', 'Beginner'
        MEDIUM = 'MD', 'Medium'
        HIGH = 'HI', 'High'

    niveauEtude = models.IntegerField(
        validators=[
            MinValueValidator(1),  
            MaxValueValidator(6)   
        ]
    )
    level = models.CharField(
        max_length=2,
        choices=Level.choices,
        default=Level.BEGINNER,
    )

    def __str__(self):
        return f"{self.niveauEtude} - {self.get_level_display()}"


class User(AbstractUser):
    is_parent = models.BooleanField(default=False)
    is_child = models.BooleanField(default=False)


class Parent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Reclamation(models.Model):
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE)
    message = models.TextField()

class Conversation(models.Model):
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE)
    child = models.ForeignKey(Child, on_delete=models.CASCADE)

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class Matiere(models.Model):
    name = models.CharField(max_length=50)

class Avatar(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    color = models.CharField(max_length=20)
    chair = models.CharField(max_length=20)
    veste = models.CharField(max_length=20)
