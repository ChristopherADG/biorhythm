from django.urls import path
from .views import UserListView, UserDetailView, UserCreateView, EventListView, EventDetailView, EventCreateView, EventUpdateView
from .sessions import LoginView, LogoutView

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<pk>', UserDetailView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/<pk>/update/', UserCreateView.as_view()),
    path('users/login/', LoginView.as_view()),
    path('users/logout/', LogoutView.as_view()),
    path('events/', EventListView.as_view()),
    path('events/<pk>', EventDetailView.as_view()),
    path('events/create/', EventCreateView.as_view()),
    path('events/<pk>/update/', EventUpdateView.as_view()),
]
