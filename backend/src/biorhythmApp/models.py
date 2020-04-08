from django.db import models


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

    def __str__(self):
        return self.title
