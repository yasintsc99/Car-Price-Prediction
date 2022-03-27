from django.contrib import admin

# Register your models here.
from Car.models import Car, Brand,Seri,Model

admin.site.register(Car)
admin.site.register(Brand)
admin.site.register(Seri)
admin.site.register(Model)