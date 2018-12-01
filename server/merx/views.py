from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import requests, json

@csrf_exempt
def home(request):

    try:
        payload = json.loads(request.body.decode('utf-8'))
        username = str(payload['username'])
        password = str(payload['password'])
    except:
       return JsonResponse({'login' : 'false'})
    
    if username == "user" and password == "1234":
        return JsonResponse({'login' : 'true'})

    return JsonResponse({'login' : 'false'})
