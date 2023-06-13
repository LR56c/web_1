from django.urls import path
from .views import (detalle_cuenta, historial_pedidos, suscripcion,
	cambiar_contrasena,detalle_cuenta_editar, agregar_tarjeta)

urlpatterns = [
	path( '', detalle_cuenta, name='detalle_cuenta' ),
	path( 'editar', detalle_cuenta_editar, name='detalle_cuenta_editar' ),
	path( 'tarjeta/agregar', agregar_tarjeta, name='agregar_tarjeta' ),
	path( 'historial', historial_pedidos, name='historial_pedidos' ),
	path( 'suscripcion', suscripcion, name='suscripcion' ),
	path( 'restablecer', cambiar_contrasena, name='cambiar_contrasena' ), ]
