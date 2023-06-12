from django.urls import path
from . import views

urlpatterns = [
	path( 'suscripcion_crear', views.suscripcion_crear, name='suscripcion_crear' ),
	path( 'suscripcion_cancelar', views.suscripcion_cancelar, name='suscripcion_cancelar' ),
	path( 'product', views.products, name='productos'),
	path( 'product/crear', views.product_create, name='crear_producto'),
	path( 'product/editar/<int:id>', views.product_edit, name='editar_producto'),
	path( 'descuento/crear', views.create_ofertas, name='crear_oferta' ),
	path( 'descuento/editar', views.edit_ofertas, name='edit_ofertas' ),
	path( 'descuentos', views.get_ofertas, name='ver_oferta'),
	path( 'usuario/historial', views.getHistorial, name='getHistorial'),
	path( 'usuarios', views.getUsuarios, name='getUsuarios'),
	path( 'usuario/editar', views.editUsuario, name='editUsuario'),
	path( 'usuarios/editar/<int:id>', views.editar_usuarios, name='editar_usuarios' ),
	path( 'carrito', views.getCarrito, name='getCarrito')
]

