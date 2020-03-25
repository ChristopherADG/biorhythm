from django.urls import path
from .views import UserListView, UserDetailView, UserCreateView

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<pk>', UserDetailView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/<pk>/update/', UserCreateView.as_view()),
]
