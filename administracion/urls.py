from django.urls import path
from .views import (ver_descuento, crear_descuento, crear_producto,
	ver_productos, ver_usuarios, editar_producto, eliminar_producto, editar_usuarios)

urlpatterns = [
	path( 'usuarios', ver_usuarios, name='ver_usuarios' ),
	path( 'usuarios/editar/<int:id>', editar_usuarios, name='editar_usuarios' ),
	path( 'descuentos', ver_descuento, name='ver_descuentos' ),
	path( 'descuentos/crear', crear_descuento, name='crear_descuento' ),
	path( 'productos', ver_productos, name='ver_productos' ),
	path( 'productos/crear', crear_producto, name='crear_producto' ),
	path( 'producto/editar/<int:id>', editar_producto, name='editar_producto' ),
	path( 'producto/eliminar/<int:id>', eliminar_producto, name='eliminar_producto' ),
]

