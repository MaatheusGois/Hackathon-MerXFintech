from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from merx.models import User
import requests, json
from hashlib import sha256

@csrf_exempt
def login(request):
    try:
        payload = json.loads(request.body.decode('utf-8'))
        username = str(payload['username'])
        password = str(payload['password'])
 
        user = User.objects.get(cpf=username)
        pwd_hash = sha256(password.encode('utf-8')).hexdigest()
        if user.password == pwd_hash:
            return JsonResponse({
                        'login' : 'true',
                        'name' : user.name,
                        'surname': user.surname,
                        'money': user.money,
                        'birthday': user.birthday
                    })

    except:
       return JsonResponse({'login' : 'false'})

def get_money(request):
    try:
        payload = json.loads(request.body.decode('utf-8'))
        username = str(payload['username'])

        user = User.objects.get(cpf=username)

        return JsonResponse({
            'money' : user.money
            })
    except:
        return JsonResponse({
            'money' : -1
            })
