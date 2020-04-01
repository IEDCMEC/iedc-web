from django.contrib import admin
from .models import Announcements


class AnnouncementAdmin:
    list_display = ('title', 'description', 'completed')

admin.site.register(Announcements , AnnouncementAdmin)