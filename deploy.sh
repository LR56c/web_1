#!/bin/bash
npm i
npm run tw
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py migrate --run-syncdb
python manage.py runserver
