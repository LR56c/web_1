from django.shortcuts import render

from tienda.forms import ProductoForm
from tienda.models import Producto


# Create your views here.
def crear_descuento(request):
	return render(request, 'crear_descuento.html' )

def ver_descuento(request):
	return render(request, 'ver_descuento.html' )

def crear_producto(request):
	return render(request, 'crear_producto.html' )

def ver_productos(request ):
	productos = Producto.objects.all()
	context = {
		'productos': productos,
	}
	return render(request, 'ver_producto.html' , context)

def ver_usuarios(request):
	return render(request, 'ver_usuarios.html' )
