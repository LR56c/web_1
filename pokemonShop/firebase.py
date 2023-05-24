import os

import firebase_admin

from pokemonShop.settings import BASE_DIR


def initialize_firebase():
    cred = firebase_admin.credentials.Certificate(os.path.join(BASE_DIR, 'django-28580-firebase-adminsdk-olf9p-1ba89606d7.json'))
    app_options = {
        'projectId': 'django-28580',
        'databaseURL': 'https://django-28580-default-rtdb.firebaseio.com/',
        'storageBucket': 'django-28580.appspot.com',
    }
    default_app = firebase_admin.initialize_app(credential= cred, options=app_options)
