from rest_framework import serializers
from biorhythmApp.models import User, Event


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'firstname', 'lastname', 'birthdate', 'picture')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('creator', 'title', 'isPublic', 'description', 'date')


class SimpleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('firstname', 'lastname', 'birthdate')
