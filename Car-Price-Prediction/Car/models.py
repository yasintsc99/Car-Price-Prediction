from django.db import models

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=15)

class Seri(models.Model):
    brandID = models.ForeignKey(Brand, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)

class Model(models.Model):
    seriID = models.ForeignKey(Seri,on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
class Car(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL,blank=True, null=True)
    seri = models.ForeignKey(Seri, on_delete=models.SET_NULL,blank=True, null=True)
    model = models.ForeignKey(Model, on_delete=models.SET_NULL,blank=True, null=True)
