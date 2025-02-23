from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

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
            MinValueValidator(1),  # Minimum value of 1
            MaxValueValidator(6)   # Maximum value of 6
        ]
    )
    level = models.CharField(
        max_length=2,
        choices=Level.choices,
        default=Level.BEGINNER,
    )

    def __str__(self):
        return f"{self.niveauEtude} - {self.get_level_display()}"
