from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from merx.models import User, DataUse 
import requests, json
from hashlib import sha256
import datetime

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

@csrf_exempt
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

@csrf_exempt
def insert_money(request):
    # (money, cpf)
    # return sucess or failure
    try:
        payload = json.loads(request.body.decode('utf-8'))
        username = str(payload['username'])
        money = float(payload['money'])

        user = User.objects.get(cpf=username)
        user.money += money
        user.save()

        return JsonResponse({
            'status' : 'success'
            })
    except:
        return JsonResponse({
            'status' : 'failure'
        })

@csrf_exempt
def use_service(request):
    # (cpf, service, money)
    # service must be in {'99', 'bo', 'yellow'}
    # return sucess or failure
 
    try:
        payload = json.loads(request.body.decode('utf-8'))
        username = str(payload['username'])
        money = float(payload['money'])
        service = str(payload['service'])

        user = User.objects.get(cpf=username)
        if money >= user.money:
            return JsonResponse({
                'status' : 'failure'
                })

        new_data = DataUse(user=user)
        new_data.date = datetime.datetime.now() 

        if service == '99':
            new_data.spent_99 += money
        elif service == 'bu':
            new_data.spent_bu += money
        elif service == 'yellow':
            new_data.spent_yellow += money
        else:
            return JsonResponse({
                'status' : 'failure'
            })

        user.money -= money
        user.save()
        new_data.save()
        return JsonResponse({
            'status' : 'success'
            })
   
    except Exception as e:
        print(e)
        return JsonResponse({
            'status' : 'failure'
            })

@csrf_exempt
def get_user_data(request):
    # (cpf, star date, end date)
    # return data or null

    try:
        payload = json.loads(request.body.decode('utf-8'))
 
        username = str(payload['username'])
        start_date = str(payload['start'])
        end_date = str(str(payload['end']))

        return JsonResponse({
            'data' : 'null'
            })

    except:
        return JsonResponse({
            'data' : 'null'
            })
