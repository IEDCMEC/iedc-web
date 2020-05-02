from django.contrib import admin
from .models import Announcements, ContactForm, ImageService,Achievements


class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class contactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email','message','completed')
class ImageServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'image')

admin.site.register(Announcements , AnnouncementAdmin)
admin.site.register(ContactForm , contactFormAdmin)
admin.site.register(ImageService , ImageServiceAdmin)
admin.site.register(Achievements)