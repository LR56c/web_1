from django.urls import path, include
from .views import indexUser
urlpatterns = [
    path('', indexUser)
]
