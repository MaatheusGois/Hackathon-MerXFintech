# Merx Fintech

> This is a project for [HackAmericas São Paulo 2018](http://www.hackamericas.org/)
hackathon, where we should develop a solution for innovation on sustainable
transport in Americas.

**Merx Fintec** is a solution aimed be a digital wallet for transportation
services, like taxi cab apps, bikes rentals and public transport.

### Installing

The server is written in Django and is  placed on `server/` folder. Follow this steps to setup the server:

1. Create a Python3 virtual environment and activate it:

```shell
$ python3 -m venv env
$ source env/bin/activate
```

2. Install and setup Django:

```shell
$ pip3 install django
$ ./manage.py migrate # this setup the Django database
```

3. Run the server!

```shell
$ ./manage.py runserver 0:8000
```

