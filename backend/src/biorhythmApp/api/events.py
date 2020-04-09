from rest_framework import generics
from biorhythmApp.models import EventParticipant, Event
from .serializers import EventSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import permissions, status
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.views import APIView
from .calc import Biorhythm
from .sessions import get_user_by_pk


class EventParticipantListView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pk = request.GET.get('pk', None)
        eventList = EventParticipant.objects.filter(user=pk)

        events = []

        for eventParticipant in eventList:
            events.append(Event.objects.get(id=eventParticipant.event.id))

        createdEvents = Event.objects.filter(creator=pk)
        for event in createdEvents:
            events.append(event)

        return Response(custom_event_json(pk, events), status=status.HTTP_200_OK)


class EventAvailableListView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pk = request.GET.get('pk', None)
        scope = request.GET.get('scope', None)
        eventList = EventParticipant.objects.filter(user=pk)

        myEvents = []

        for eventParticipant in eventList:
            myEvents.append(eventParticipant.event.id)

        finalEvents = []
        allEvents = Event.objects.filter(~Q(creator=pk)) if scope is None else Event.objects.filter(~Q(creator=pk), scope=scope)
        for event in allEvents:
            if not event.id in myEvents and event.isPublic:
                finalEvents.append(event)

        return Response(custom_event_json(pk, finalEvents), status=status.HTTP_200_OK)


class EventOrganizedListView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pk = request.GET.get('pk', None)

        events = Event.objects.filter(creator=pk)

        return Response(custom_event_json(pk, events), status=status.HTTP_200_OK)


class EventJoinedListView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pk = request.GET.get('pk', None)
        eventList = EventParticipant.objects.filter(user=pk)

        events = []

        for eventParticipant in eventList:
            events.append(Event.objects.get(id=eventParticipant.event.id))

        return Response(custom_event_json(pk, events), status=status.HTTP_200_OK)


def custom_event_json(pk, events):
    user_requested = get_user_by_pk(pk)
    if not user_requested:
        return Response({'error': "Can't find user or you are not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

    structure = []
    for event in events:
        bio = Biorhythm(user_requested.birthdate).calculate(target_date=event.date)

        temp_event = {
            'id': event.id,
            'creator': event.creator.id,
            'title': event.title,
            'isPublic': event.isPublic,
            'description': event.description,
            'date': event.date,
            'scope': event.scope,
            'myScopeBio': bio.get_by_scope(event.scope)
        }
        structure.append(temp_event)

    return structure
