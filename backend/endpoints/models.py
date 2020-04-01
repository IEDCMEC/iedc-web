from django.db import models


# Create your models here.
class Announcements(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    def __str__(self):
        return self.title
class ContactForm(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    message = models.TextField()
    completed = models.BooleanField(default=False)
    def __str__(self):
        return self.name
class ImageService(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    image = models.ImageField(upload_to='post_images')
    def __str__(self):
        return self.name