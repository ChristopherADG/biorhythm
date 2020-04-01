from rest_framework import serializers
from biorhythmApp.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'firstname', 'lastname', 'birthdate')
