from rest_framework import serializers
from .models import Announcements, ContactForm, ImageService


class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'
class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'
class ImageServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageService
        fields = '__all__'
