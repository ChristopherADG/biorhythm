from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from biorhythmApp.models import User
from django.core.exceptions import ObjectDoesNotExist
import base64
from django.core.files.base import ContentFile
from datetime import datetime


class ImageUploadView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk=0):
        try:
            user_requested = User.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response({'error': "Can't find user or you are not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({'image_url': user_requested.picture.url}, status=status.HTTP_200_OK)

    def post(self, request, pk=0):
        file_str = request.data.get("img_base_64")

        try:
            user_requested = User.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return Response({'error': "Can't find user or you are not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            user_requested.picture = to_file(file_str, str(pk))
            user_requested.save(update_fields=['picture'])
        except:
            return Response({'error': "Can't upload image"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'image_url': user_requested.picture.url}, status=status.HTTP_200_OK)


def to_file(file_str, user_id):
    format, imgstr = file_str.split(';base64,')
    ext = format.split('/')[-1]
    name = user_id + '/' + datetime.now().strftime("%m%d%Y%H%M%S") + '.' + ext

    return ContentFile(base64.b64decode(imgstr), name=name)
