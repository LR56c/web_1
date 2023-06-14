from django.urls import path
from .views import index, pago, orden, producto, index_carrito, index_carrito_delete, pago_eliminar, orden_id, carrito_repetir, producto_extra

urlpatterns = [
	path( '', index, name='inicio' ),
	path( 'carrito/agregar/<str:id>', index_carrito, name='inicio_carrito' ),
	path( 'carrito/delete/<str:id>', index_carrito_delete, name='index_carrito_delete' ),
	path( 'producto/<str:id>', producto, name='detalle_producto' ),
	path( 'producto/extra/<str:id>', producto_extra, name='detalle_producto_extra' ),
	path( 'pago', pago, name='pago' ),
	path( 'carrito/repetir/<str:id>', carrito_repetir, name='carrito_repetir' ),
	path( 'pago/eliminar/<str:id>', pago_eliminar, name='pago_eliminar' ),
	path( 'orden', orden, name='orden' ),
	path( 'orden/<str:id>', orden_id, name='orden_id' ),
]
