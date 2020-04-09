from rest_framework import generics
from biorhythmApp.models import EventParticipant, Event
from .serializers import EventSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import permissions
from rest_framework.response import Response
import json
from django.forms.models import model_to_dict
from django.db.models import Q


class EventParticipantListView(generics.ListAPIView):
    serializer_class = EventSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        pk = self.request.query_params.get('pk', None)
        eventList = EventParticipant.objects.filter(user=pk)

        events = []

        for eventParticipant in eventList:
            events.append(Event.objects.get(id=eventParticipant.event.id))

        createdEvents = Event.objects.filter(creator=pk)
        for event in createdEvents:
            events.append(event)

        return events


class EventAvailableListView(generics.ListAPIView):
    serializer_class = EventSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        pk = self.request.query_params.get('pk', None)
        scope = self.request.query_params.get('scope', None)
        eventList = EventParticipant.objects.filter(user=pk)

        myEvents = []

        for eventParticipant in eventList:
            myEvents.append(eventParticipant.event.id)

        finalEvents = []
        allEvents = Event.objects.filter(~Q(creator=pk)) if scope is None else Event.objects.filter(~Q(creator=pk), scope=scope)
        for event in allEvents:
            if not event.id in myEvents and event.isPublic:
                finalEvents.append(event)

        return finalEvents


class EventOrganizedListView(generics.ListAPIView):
    serializer_class = EventSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        pk = self.request.query_params.get('pk', None)

        return Event.objects.filter(creator=pk)


class EventJoinedListView(generics.ListAPIView):
    serializer_class = EventSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        pk = self.request.query_params.get('pk', None)
        eventList = EventParticipant.objects.filter(user=pk)

        events = []

        for eventParticipant in eventList:
            events.append(Event.objects.get(id=eventParticipant.event.id))

        return events

