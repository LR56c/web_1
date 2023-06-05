from django.urls import path
from .views import (detalle_cuenta, historial_pedidos, suscripcion,
	cambiar_contrasena,detalle_cuenta_editar )

urlpatterns = [
	path( '', detalle_cuenta, name='detalle_cuenta' ),
	path( 'editar', detalle_cuenta_editar, name='detalle_cuenta_editar' ),
	path( 'historial', historial_pedidos, name='historial_pedidos' ),
	path( 'suscripcion', suscripcion, name='suscripcion' ),
	path( 'restablecer', cambiar_contrasena, name='cambiar_contrasena' ), ]
