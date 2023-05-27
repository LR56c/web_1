from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from tienda.models import Producto


@login_required
def crear_descuento(request):
	return render(request, 'crear_descuento.html' )

@login_required
def ver_descuento(request):
	return render(request, 'ver_descuento.html' )

@login_required
def crear_producto(request):
	return render(request, 'crear_producto.html' )

@login_required
def ver_productos(request ):
	productos = Producto.objects.all()
	context = {
		'productos': productos,
	}
	return render(request, 'ver_producto.html' , context)

@login_required
def ver_usuarios(request):
	return render(request, 'ver_usuarios.html' )
