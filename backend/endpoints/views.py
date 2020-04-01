from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AnnouncementsSerializer, ContactFormSerializer, ImageServiceSerializer 
from .models import Announcements, ContactForm, ImageService


class AnnouncementsView(viewsets.ModelViewSet):
    serializer_class = AnnouncementsSerializer        
    queryset = Announcements.objects.all()          
class ContactFormView(viewsets.ModelViewSet):
    serializer_class = ContactFormSerializer         
    queryset = ContactForm.objects.all()          
class ImageServiceView(viewsets.ModelViewSet):
    serializer_class = ImageServiceSerializer         
    queryset = ImageService.objects.all()          
