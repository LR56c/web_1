from django.urls import path
from . import views

urlpatterns = [
	path( '', views.productsData ),
	path( 'offer', views.offer ),
	path( 'sub', views.subcription ),
	path( 'product', views.products, name='productos'),
	path( 'product/crear', views.product_create, name='crear_producto'),
	# path( 'product/<int:id>', views.product_get, name='ver_producto'),
	# path( 'product/eliminar/<int:id>', views.product_delete, name='eliminar_producto'),
	# path( 'product/editar/<int:id>', views.product_edit, name='editar_producto'),
	path( 'descuento/crear', views.create_ofertas, name='crear_oferta' ),
	path( 'descuentos', views.get_ofertas, name='ver_oferta'),
	path( 'usuario/historial', views.getHistorial, name='getHistorial'),
	path( 'usuarios', views.getUsuarios, name='getUsuarios'),
	path( 'usuario/editar', views.editUsuario, name='editUsuario'),
	path( 'carrito', views.getCarrito, name='getCarrito')
]

