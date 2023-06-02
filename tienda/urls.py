from django.urls import path
from .views import index, pago, orden, producto

urlpatterns = [path( '', index, name='inicio' ),
	path( 'producto/<str:id>', producto, name='detalle_producto' ),
	path( 'pago', pago, name='pago' ), path( 'orden', orden, name='orden' ), ]
