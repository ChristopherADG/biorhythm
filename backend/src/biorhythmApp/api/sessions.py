from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from biorhythmApp.models import User
from django.contrib.auth import logout


SESSION_ID = 'biorhythm'
LOGGED_IN = 'logged in'
LOGGED_OUT = 'not logged in'
ERROR_INVALID_CREDENTIALS = {'success': False, "redirect": False, 'message': 'Invalid email or password'}


def is_logged_in(request):
    if 'biorhythm' in request.session:
        return True
    return False


class LoginView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if is_logged_in(request):
            return Response({"success": True, "redirect": True, "message": LOGGED_IN})
        else:
            return Response({"success": True, "redirect": False, "message": LOGGED_OUT})

    def post(self, request, format=None):
        if is_logged_in(request):
            return Response({"success": True, "redirect": True, "message": LOGGED_IN})

        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user_requested = User.objects.get(email__exact=email)
        except ObjectDoesNotExist:
            return Response(ERROR_INVALID_CREDENTIALS)

        if user_requested.password == password:
            request.session[SESSION_ID] = {
                'name': user_requested.firstname,
                'lastname': user_requested.lastname,
                'email': user_requested.email
            }
            return Response({"success": True, "redirect": True, "message": LOGGED_IN})
        return Response(ERROR_INVALID_CREDENTIALS)


class LogoutView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if 'biorhythm' in request.session:
            try:
                del request.session[SESSION_ID]
                logout(request)
            except KeyError:
                pass
            return Response({"success": True, "redirect": True, "message": LOGGED_OUT})
        return Response({"success": True, "redirect": False, "message": LOGGED_OUT})
