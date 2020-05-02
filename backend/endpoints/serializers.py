from rest_framework import serializers
from .models import Announcements, ContactForm, ImageService, Achievements


class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = ('id', 'title', 'description', 'completed')
class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'
class ImageServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageService
        fields = '__all__'
class AchievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = '__all__'
