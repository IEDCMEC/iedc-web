from django.db import models


# Create your models here.
class Announcements(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    def _str_(self):
        return self.title
class Contactform(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    message = models.TextField()
    completed = models.BooleanField(default=False)
    def _str_(self):
        return self.name
