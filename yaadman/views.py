from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
import json

from .models import gasproduct,accessoryproduct
def home(request):
  
    gasp=gasproduct.objects.all()
    acces=accessoryproduct.objects.all()
    data= JsonResponse(list(gasproduct.objects.values()), safe=False)
    data2=JsonResponse(list(accessoryproduct.objects.values()), safe=False)
    
    response= HttpResponse(data, content_type='application/json')
    response2=HttpResponse(data2,content_type='application/json')
   # respondent=response *response2
    with open('static/Javascript/product.json', 'wb') as outf:
        outf.write(response.content)
       # outf.write(response2.content)
    return render(request, 'index.html',{'gasp':gasp,'acces':acces})

def jsondata (request):
    data= JsonResponse(list(gasproduct.objects.values()), safe=False)
    response= HttpResponse(data, content_type='text/plain')
    with open('Data.json', 'wb') as outf:
        outf.write(response.content)
    return response
   
  