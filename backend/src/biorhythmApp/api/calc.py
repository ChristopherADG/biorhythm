from datetime import datetime, timedelta
import math


class Biorhythm:

    def __init__(self, bdate):
        self.bdate = bdate
        self.physical = 0
        self.emotional = 0
        self.intellectual = 0
        self.days_since = 0

    def get_time_difference(self, target_date):
        return (target_date - self.bdate).days

    def calculate(self, target_date=datetime.now(), limit=15):
        self.days_since = self.get_time_difference(target_date)

        self.physical = round(math.sin((2 * math.pi * self.days_since) / 23), limit)
        self.emotional = round(math.sin((2 * math.pi * self.days_since) / 28), limit)
        self.intellectual = round(math.sin((2 * math.pi * self.days_since) / 33), limit)
        return self

    def to_string(self):
        return "p: {}, e: {}, i: {}".format(self.physical, self.emotional, self.intellectual)


class ListBio:

    def __init__(self, bdate, range):
        self.bdate = bdate
        self.range = range + 1
        self.list = []

    def get_next_days(self, limit=15):
        today = datetime.now()

        for i in range(self.range):
            target = today + timedelta(days=i)
            self.list.append(Biorhythm(self.bdate).calculate(target_date=target, limit=limit))

        return self.list
