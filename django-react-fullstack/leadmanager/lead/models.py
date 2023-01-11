from django.db import models

class Lead(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100, unique=True)
    message=models.CharField(max_length=500, blank=True)
    createAt=models.DateTimeField(auto_now_add=True)