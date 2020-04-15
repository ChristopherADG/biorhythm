from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework import permissions
from biorhythmApp.models import User, Event, EventParticipant
from .serializers import UserSerializer, EventSerializer, SimpleUserSerializer, EventParticipantSerializer, SimpleEventSerializer


class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)


class UserUpdateView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = SimpleUserSerializer
    permission_classes = (permissions.AllowAny,)


# EVENT
class EventListView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventCreateView(CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.AllowAny,)


class EventUpdateView(UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = SimpleEventSerializer
    permission_classes = (permissions.AllowAny,)


class EventDeleteView(DestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = SimpleEventSerializer
    permission_classes = (permissions.AllowAny,)


# EVENT PARTICIPANT
class EventParticipantCreateView(CreateAPIView):
    queryset = EventParticipant.objects.all()
    serializer_class = EventParticipantSerializer
    permission_classes = (permissions.AllowAny,)
