from babel.numbers import format_currency, format_decimal
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from tienda.models import Producto

@login_required
def crear_descuento(request):
	context = {}
	productos = Producto.objects.all()
	context['productos'] = productos
	return render(request, 'crear_descuento.html', context )

@login_required
def ver_descuento(request):
	return render(request, 'ver_descuento.html' )

@login_required
def crear_producto(request):
	return render(request, 'crear_producto.html' )

@login_required
def ver_productos(request ):
	productos = Producto.objects.all()

	for producto in productos:

		codigo_moneda = "CLP"
		producto.valor = format_currency( producto.valor, codigo_moneda,locale="es_CL" )
		producto.stock = format_decimal( producto.stock, locale='es_CL' )

	context = {
		'productos': productos,
		'active': 'ver_productos'
	}

	return render(request, 'ver_producto.html' , context)

@login_required
def ver_usuarios(request):
	return render(request, 'ver_usuarios.html' )


@login_required
def editar_producto( request, id ):
	try:
		producto = Producto.objects.get( id=id )

		context = {
			'producto': producto,
		}

		return render( request, 'editar_producto.html', context )
	# TODO: integrar con firebase
	except Exception as e:
		return redirect('404')

@login_required
def eliminar_producto( request , id):
	try:
		producto = Producto.objects.get( id=id )
		producto.delete()
		return redirect('ver_productos')
	except Exception as e:
		messages.error(request, 'No se pudo eliminar el producto')
		return redirect('404')


@login_required
def editar_usuarios( request , id):
	return None
