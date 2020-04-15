from django.urls import path
from .views import (
    UserListView,
    UserDetailView,
    UserCreateView,
    UserUpdateView,
    EventListView,
    EventDetailView,
    EventCreateView,
    EventUpdateView,
    EventParticipantCreateView,
    EventDeleteView
)
from .sessions import LoginView, LogoutView
from .calc import BioView
from .uploads import ImageUploadView
from .events import EventParticipantListView, EventAvailableListView, EventOrganizedListView, EventJoinedListView, EventDeleteJoinView

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<pk>', UserDetailView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/<pk>/update/', UserUpdateView.as_view()),
    path('users/login/', LoginView.as_view()),
    path('users/logout/', LogoutView.as_view()),
    path('events/', EventListView.as_view()),
    path('events/<pk>', EventDetailView.as_view()),
    path('events/create/', EventCreateView.as_view()),
    path('events/<pk>/update/', EventUpdateView.as_view()),
    path('biocalc/<int:pk>', BioView.as_view()),
    path('image/<int:pk>/', ImageUploadView.as_view()),
    path('events/join/', EventParticipantCreateView.as_view()),
    path('events/myevents/', EventParticipantListView.as_view()),
    path('events/availableEventes/', EventAvailableListView.as_view()),
    path('events/organized/', EventOrganizedListView.as_view()),
    path('events/joined/', EventJoinedListView.as_view()),
    path('events/<pk>/delete/', EventDeleteView.as_view()),
    path('events/join/remove/', EventDeleteJoinView.as_view())
]
