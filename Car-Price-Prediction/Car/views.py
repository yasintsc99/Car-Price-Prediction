from django.shortcuts import render
from .models import Brand,Seri,Model
# Create your views here.
def load_series(request):
    brand_ID = request.GET.get('brand_ID')
    series = Seri.objects.filter(brand_ID=brand_ID).all()
    return render(request, 'Car/seri_select_options.html', {'series': series})
def load_models(request):
    seri_ID = request.GET.get('seri_ID')
    models = Model.objects.filter(seri_ID = seri_ID).all()
    return render(request,'Car/model_select_options.html',{'models':models})

