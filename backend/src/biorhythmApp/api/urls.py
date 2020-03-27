from django.urls import path
from .views import UserListView, UserDetailView, UserCreateView
from .sessions import LoginView, LogoutView

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<pk>', UserDetailView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/<pk>/update/', UserCreateView.as_view()),
    path('users/login/', LoginView.as_view()),
    path('users/logout/', LogoutView.as_view()),
]
