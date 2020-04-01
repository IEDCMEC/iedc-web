from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AnnouncementsSerializer
from .models import Announcements

class AnnouncementsView(viewsets.ModelViewSet):
    serializer_class = AnnouncementsSerializer         # add this
    queryset = Announcements.objects.all()          
