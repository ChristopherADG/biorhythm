from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class User(models.Model):
    email = models.CharField(max_length=120, unique=True)
    password = models.CharField(max_length=120)
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    birthdate = models.DateField()
    picture = models.FileField(upload_to='uploads/', null=True)

    def __str__(self):
        return self.email


class Event(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    isPublic = models.BooleanField()
    description = models.TextField()
    date = models.DateField()
    scope = models.IntegerField(default=1,
                                validators=[MaxValueValidator(3), MinValueValidator(1)])

    def __str__(self):
        return self.title


class EventParticipant(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.event.title + "_" + self.user.email
