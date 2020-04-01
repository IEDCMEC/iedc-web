from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from endpoints import views

router = routers.DefaultRouter()                      
router.register(r'announcements', views.AnnouncementsView, 'Announcements') 
router.register(r'contactform', views.ContactFormView, 'ContactForm') 
router.register(r'imageupload', views.ImageServiceView, 'ImageService') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
