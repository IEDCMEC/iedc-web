from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from endpoints import views
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()                      
router.register(r'announcements', views.AnnouncementsView, 'Announcements') 
router.register(r'contactform', views.ContactFormView, 'ContactForm') 
router.register(r'imageupload', views.ImageServiceView, 'ImageService') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
