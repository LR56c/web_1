from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from babel.numbers import format_currency, format_decimal

from django.contrib import messages
import random as rn
from django.shortcuts import redirect, render

from tienda.models import Carrito, DetalleOrden, Oferta, Producto, Usuario


@login_required
def index( request ):
	context = { }
	productos = Producto.objects.all()
	ofertasList = []
	carruselList = []
	productList = []

	ind = rn.sample( range( len( productos ) ), 3 )

	for i in range( len( productos ) ):
		productoEntry = { }
		producto = productos[i]
		productoEntry['id'] = producto.id
		productoEntry['nombre'] = producto.nombre
		productoEntry['imagen'] = producto.imagen

		codigo_moneda = "CLP"
		productoEntry['valor'] = format_currency( producto.valor, codigo_moneda,
			locale="es_CL" )

		if producto.oferta_id is not None:
			oferta = Oferta.objects.get( id=producto.oferta_id )
			productoEntry['descuento'] = oferta.porcentaje
			productoEntry['rebaja'] = format_currency(
				producto.valor - (producto.valor * (oferta.porcentaje / 100)),
				codigo_moneda, locale="es_CL" )
			ofertasList.append( productoEntry )
		else:
			productList.append( productoEntry )

		if i in ind:
			carruselList.append( productoEntry )

	context['productos'] = productList
	context['carrusel'] = carruselList
	context['ofertas'] = ofertasList

	return render( request, 'index_tienda.html', context )


def custom_404( request ):
	return render( request, '404.html', status=404 )


@login_required
def orden( request ):
	return render( request, 'orden.html' )


@login_required
def pago( request ):
	return render( request, 'pago.html' )


@login_required
def producto( request, id ):
	context = { }

	if request.method == 'POST':
		username = request.session['user_session']
		user = User.objects.get( username=username )
		usuario = Usuario.objects.get( user=user )
		producto = Producto.objects.get( id=id )
		cantidad = request.POST['input-add']
		monto = int( producto.valor ) * int( cantidad )
		detalle_orden = DetalleOrden.objects.create( producto=producto,cantidad=cantidad, monto=monto )
		carrito = Carrito.objects.create( usuario=usuario,detalle_orden=detalle_orden )
		carrito.save()
		detalle_orden.save()
		context['sucess'] = True
	try:
		producto = Producto.objects.get( id=id )
		productoEntry = { }
		productoEntry['id'] = producto.id
		productoEntry['nombre'] = producto.nombre
		productoEntry['imagen'] = producto.imagen
		productoEntry['descripcion'] = producto.descripcion

		codigo_moneda = "CLP"
		productoEntry['valor'] = format_currency( producto.valor, codigo_moneda,
			locale="es_CL" )
		productoEntry['stock'] = format_decimal( producto.stock, locale='es_CL' )

		if producto.oferta_id is not None:
			oferta = Oferta.objects.get( id=producto.oferta_id )
			productoEntry['descuento'] = oferta.porcentaje
			productoEntry['rebaja'] = format_currency(
				producto.valor - (producto.valor * (oferta.porcentaje / 100)),
				codigo_moneda, locale="es_CL" )
		else:
			productoEntry['descuento'] = '0'

		context['producto'] = productoEntry
		return render( request, 'detalle_producto.html', context )
	except Exception as e:
		print( e )
		messages.error( request, 'El producto no existe' )
		return redirect( '404' )
