from django.db import models


class User(models.Model):
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    birthdate = models.DateField()

    def __str__(self):
        return self.email
