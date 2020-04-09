from rest_framework import serializers
from biorhythmApp.models import User, Event, EventParticipant


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'firstname',
                  'lastname', 'birthdate', 'picture')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'creator', 'title', 'isPublic',
                  'description', 'date', 'scope')


class EventParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipant
        fields = ('event', 'user')


class SimpleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('firstname', 'lastname', 'birthdate')


class SimpleEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('title', 'description')
