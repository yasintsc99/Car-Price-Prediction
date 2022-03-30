from . import views
from django.urls import path

urlpatterns = [
    path('',views.Home,name="Anasayfa"),
    path('Hakkimizda',views.About,name="Hakkimizda")]