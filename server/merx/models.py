from django.db import models
import datetime

# TODO: extend more secure and reliable Django User model 
class User(models.Model):
    cpf = models.CharField(max_length=11, unique=True, null=False)
    name = models.TextField(max_length=500)
    surname = models.TextField(max_length=500)
    password = models.CharField(max_length=256)
    money = models.FloatField(default=0.0)
    birthday = models.DateField(auto_now_add=True, blank=True)

class DataUse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    spent_99 = models.FloatField(default=0.0)
    spent_yellow = models.FloatField(default=0.0)
    spent_bu = models.FloatField(default=0.0)
