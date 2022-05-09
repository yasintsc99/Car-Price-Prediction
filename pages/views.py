from django.shortcuts import render
from django.conf import settings
import pandas as pd
import numpy as np
import os
filename = os.path.join(settings.BASE_DIR, 'pages', 'static', 'excel','Markalar.xlsx')
data = pd.read_excel(filename)
# Ana Sayfa
def Home(request):
    if request.method =='POST':
        marka = request.POST['Marka']
        seri = request.POST['Seri']
        model = request.POST['Model']
        yil = request.POST['year']
        yakit_tipi = request.POST['fuel']
        vites_tipi = request.POST['vites']
        motor_gucu = request.POST['Motor_Gucu']
        motor_hacmi = request.POST['Motor_Hacmi']
        km = request.POST['KM']
        boya = request.POST['Boya']
        degisen = request.POST['Degisen']
        print(marka,seri,model,yil,yakit_tipi,vites_tipi,motor_gucu,motor_hacmi,km,boya,degisen)
        print(data.head(5))
    return render(request,'pages/mainpage.html')

def About(request):
    return render(request,'pages/about.html', {'name': 'Yasin'})


    