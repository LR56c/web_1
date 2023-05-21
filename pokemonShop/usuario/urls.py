from django.urls import path, include
from .views import login , registro
urlpatterns = [
    path('login', login, name='login'),
    path('registro', registro, name='registro' )
]
