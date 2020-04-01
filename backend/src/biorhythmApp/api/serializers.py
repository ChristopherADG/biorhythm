from rest_framework import serializers
from biorhythmApp.models import User, Event


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'firstname', 'lastname', 'birthdate')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('creator', 'title', 'isPublic', 'description', 'date')
