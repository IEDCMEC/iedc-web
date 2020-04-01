from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from endpoints import views

router = routers.DefaultRouter()                      # add this
router.register(r'Announcements', AnnouncementsView, 'Announcements') 

urlpatterns = [
    path('admin/', admin.site.urls),
]
