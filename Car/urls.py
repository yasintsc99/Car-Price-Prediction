from django.urls import path
from . import views

urlpatterns = [
    path('ajax/load-series/', views.load_series, name='ajax_load_series'),
    path('ajax/load-models/', views.load_models, name='ajax_load_models')
]