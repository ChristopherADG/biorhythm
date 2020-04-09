from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from datetime import datetime, timedelta, timezone
import math
from .sessions import get_user_by_pk


class BioView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk=''):

        user = get_user_by_pk(pk)
        if not user:
            return Response({'error': "Can't find user or you are not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        limit = 15
        scope = None
        target_date = datetime.now()

        if request.GET.get('target_date'):
            target_date = datetime.strptime(
                request.GET.get('target_date'), '%Y-%m-%d')

        if request.GET.get('range'):
            scope = int(request.GET.get('range'))

        if request.GET.get('limit'):
            limit = int(request.GET.get('limit'))

        birthday_dt = datetime.combine(user.birthdate, datetime.min.time())
        if scope:
            return Response(
                ListBio(birthday_dt, scope)
                .get_next_days(target_date, limit)
                .to_dic(),
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                Biorhythm(birthday_dt)
                .calculate(target_date, limit)
                .to_dic(),
                status=status.HTTP_200_OK
            )


class Biorhythm:

    def __init__(self, init_date):
        self.init_date = init_date
        self.physical = 0
        self.emotional = 0
        self.intellectual = 0
        self.days_since = 0
        self.target_date = 0

    def get_time_difference(self, target_date):
        self.target_date = target_date
        return (target_date - self.init_date).days

    def calculate(self, target_date=datetime.now(), limit=15):
        self.days_since = self.get_time_difference(target_date)

        self.physical = round(
            math.sin((2 * math.pi * self.days_since) / 23), limit)
        self.emotional = round(
            math.sin((2 * math.pi * self.days_since) / 28), limit)
        self.intellectual = round(
            math.sin((2 * math.pi * self.days_since) / 33), limit)
        return self

    def to_string(self):
        return "p: {}, e: {}, i: {}".format(self.physical, self.emotional, self.intellectual)

    def to_dic(self):
        return {
            "phy": self.physical,
            "emo": self.emotional,
            "int": self.intellectual,
            "days_since": self.days_since,
            "init_date": int(self.init_date.timestamp() * 1000),
            "init_date_str": self.init_date.strftime('%Y/%m/%d'),
            "target_date": int(self.target_date.timestamp() * 1000),
            "target_date_str": self.target_date.strftime('%Y/%m/%d')
        }

    def get_by_scope(self, scope):
        if scope is 1:
            return self.physical
        elif scope is 2:
            return self.emotional
        elif scope is 3:
            return self.intellectual
        else:
            return 0


class ListBio:

    def __init__(self, birth_date, scope):
        self.birth_date = birth_date
        self.scope = scope + 1
        self.list = []

    def get_next_days(self, init_date=datetime.now(), limit=15):

        for i in range(self.scope):
            target_date = init_date + timedelta(days=i)
            self.list.append(Biorhythm(self.birth_date).calculate(
                target_date=target_date, limit=limit))

        return self

    def to_dic(self):
        structure = []
        for i, bio in enumerate(self.list):
            structure.append(bio.to_dic())
        return structure
