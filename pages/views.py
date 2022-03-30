from cgitb import html
from django.shortcuts import render
from django.http import HttpResponse

# Ana Sayfa
def Home(request):
    return render(request,'pages/mainpage.html')

def About(request):
    return render(request,'pages/about.html', {'name': 'Yasin'})
    