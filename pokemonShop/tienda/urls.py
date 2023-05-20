from django.urls import path, include
from .views import index, error_page
urlpatterns = [
    path('', index),
    path('404', error_page )
]
