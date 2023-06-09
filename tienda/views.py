from datetime import datetime

from django.contrib.auth.models import User

from django.contrib.auth.decorators import login_required
from babel.numbers import format_currency, format_decimal, parse_number

from django.contrib import messages
import random as rn
from django.shortcuts import redirect, render

import api.methods
from tienda.models import (Carrito, Compra, DetalleOrden, Oferta, Orden,
	Producto, Tarjeta, Usuario, Envio, )


@login_required
def index( request ):
	context = { }

	productos = Producto.objects.all()
	ofertasList = []
	carruselList = []
	productList = []

	ind = None if len( productos ) < 3 else rn.sample( range( len( productos ) ),
		3 )

	codigo_moneda = "CLP"

	for i in range( len( productos ) ):
		productoEntry = { }
		producto = productos[i]
		productoEntry['id'] = producto.id
		productoEntry['nombre'] = producto.nombre
		productoEntry['imagen'] = producto.imagen

		productoEntry['valor'] = format_currency( producto.valor, codigo_moneda,
			locale="es_CL" )

		if producto.oferta_id is not None:
			oferta = Oferta.objects.get( id=producto.oferta_id )
			productoEntry['descuento'] = oferta.porcentaje
			productoEntry['original'] = productoEntry['valor']

			productoEntry['rebaja'] = format_currency(
				producto.valor - (producto.valor * (oferta.porcentaje / 100)),
				codigo_moneda, locale="es_CL" )
			productoEntry['valor'] = productoEntry['rebaja']
			ofertasList.append( productoEntry )

		productList.append( productoEntry )

		if ind is not None and i in ind:
			carruselList.append( productoEntry )

	context['productos'] = productList
	context['carrusel'] = carruselList
	context['ofertas'] = ofertasList

	carrito, montoTotal = api.methods.getCart( request.user )
	context['carrito'] = carrito
	context['montoTotal'] = montoTotal
	context['index'] = True
	context['carrito_enabled'] = True

	return render( request, 'index_tienda.html', context )


def custom_404( request ):
	return render( request, '404.html', status=404 )


@login_required
def orden( request ):
	if request.method == 'POST':
		try:
			user = request.user
			tarjeta_id = request.POST.get( 'tarjeta_id' )
			tarjeta = Tarjeta.objects.get( id=tarjeta_id )
			usuario = Usuario.objects.get( user=user )
			carritoList, montoTotal = api.methods.getCart( user )

			if len( carritoList ) == 0:
				messages.error( request,
					'No se puede generar una orden con el carrito vacio' )
				return redirect( 'inicio' )

			montoTotal = parse_number( montoTotal[1:], locale='es_CL' )

			# Preparacion - En Curso - Entregado
			envio = Envio.objects.create( estado='Entregado', compania='Chilexpress',
				numero_seguimiento='123456789', fecha=datetime.now().date(),
				direccion=usuario.direccion )
			envio.save()

			# Pagado, Enviado, Finalizado
			orden = Orden.objects.create( usuario=usuario, valor=montoTotal,
				estado='Finalizado', fecha=datetime.now(), envio=envio,
				numero_tarjeta=tarjeta.numero_tarjeta )
			orden.save()

			for car in carritoList:
				detalleId = car['detalleId']
				carritoId = car['carritoId']

				detalle = DetalleOrden.objects.get( id=detalleId )

				compra = Compra.objects.create( orden=orden, detalle_orden=detalle )
				compra.save()

				carrito = Carrito.objects.get( id=carritoId )
				carrito.delete()

			return redirect( 'orden_id', id=orden.id )
		except Exception as e:
			return redirect( 'pago' )

	return redirect( 'pago' )


@login_required
def carrito_repetir( request, id ):
	if request.method == 'GET':
		try:
			user = User.objects.get( username=request.user )
			usuario = Usuario.objects.get( user=user )
			carritos = usuario.carrito_set.all()

			for carrito in carritos:
				detalle = DetalleOrden.objects.get( id=carrito.detalle_orden.id )
				detalle.delete()

			orden = Orden.objects.get( id=id )

			for compra in orden.compra_set.all():
				producto = compra.detalle_orden.producto
				cantidad = compra.detalle_orden.cantidad
				api.methods.save_to_cart( usuario, producto, cantidad )

			return redirect( 'pago' )
		except Exception as e:
			return redirect( '404' )
	return redirect( '404' )


@login_required
def orden_id( request, id ):
	context = { }
	try:
		orden = Orden.objects.get( id=id )
		context['orden'] = orden

		return render( request, 'orden.html', context )
	except Exception as e:
		return redirect( '404' )


@login_required
def pago( request ):
	context = { }
	if request.method == 'GET':
		carritoList, montoTotal = api.methods.getCart( request.user )
		if len( carritoList ) == 0:
			messages.error( request, 'El carrito esta vacio' )
			return redirect( 'inicio' )
		context['carrito'] = carritoList
		context['montoTotal'] = montoTotal

		usuario = Usuario.objects.get( user=request.user )
		tarjetas = None
		try:
			tarjetas = usuario.tarjeta_set.all()

			for tarjeta in tarjetas:
				tarjeta.numero_tarjeta = api.methods.ocultar_caracteres(
					tarjeta.numero_tarjeta )
		except Exception as e:
			pass

		context['tarjetas'] = tarjetas

		return render( request, 'pago.html', context )
	return render( request, 'pago.html', context )


@login_required
def producto_extra( request, id ):
	if request.method == 'POST':
		usuario = Usuario.objects.get( user=request.user )
		id_from = request.POST.get( 'id_from' )
		producto = Producto.objects.get( id=id )
		cantidad = request.POST.get( 'input-add' )
		api.methods.save_to_cart( usuario, producto, cantidad )
		return  redirect('detalle_producto', id=id_from)
	return  redirect('404')


@login_required
def producto( request, id ):
	context = { }

	if request.method == 'POST':
		usuario = Usuario.objects.get( user=request.user )
		producto = Producto.objects.get( id=id )
		cantidad = request.POST.get('input-add')
		context['sucess'] = api.methods.save_to_cart( usuario, producto, cantidad )

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
		context['carrito_enabled'] = True
		carrito, montoTotal = api.methods.getCart( request.user )
		context['carrito'] = carrito
		context['montoTotal'] = montoTotal

		productos = Producto.objects.all()
		productList = [ ]

		for productoElement in productos:
			productoEntry = { }

			productoEntry['id'] = productoElement.id
			productoEntry['nombre'] = productoElement.nombre
			productoEntry['imagen'] = productoElement.imagen
			productoEntry['valor'] = format_currency( productoElement.valor, codigo_moneda,
				locale="es_CL" )

			if productoElement.oferta_id is not None:
				oferta = Oferta.objects.get( id=productoElement.oferta_id )
				productoEntry['descuento'] = oferta.porcentaje
				productoEntry['original'] = productoEntry['valor']

				productoEntry['rebaja'] = format_currency(productoElement.valor - (productoElement.valor * (oferta.porcentaje / 100)),
					codigo_moneda, locale="es_CL" )
				productoEntry['valor'] = productoEntry['rebaja']
			else:
				productoEntry['descuento'] = '0'

			productList.append( productoEntry )

		context['productos'] = productList

		return render( request, 'detalle_producto.html', context )
	except Exception as e:
		messages.error( request, 'El producto no existe' )
		return redirect( '404' )


@login_required
def index_carrito( request, id ):
	if request.method == 'POST':
		usuario = Usuario.objects.get( user=request.user )
		producto = Producto.objects.get( id=id )
		cantidad = request.POST['input-add']
		result = api.methods.save_to_cart( usuario, producto, cantidad )
		if result:
			messages.success( request, 'Producto agregado al carrito' )
		else:
			messages.error( request, 'No se pudo agregar el producto al carrito' )
		return redirect( 'inicio' )

	return redirect( 'inicio' )


@login_required
def index_carrito_delete( request, id ):
	if request.method == 'POST':
		user = User.objects.get( username=request.user )
		id_from = request.POST.get( 'id_from' )
		usuario = Usuario.objects.get( user=user )
		carrito = Carrito.objects.get( id=id, usuario=usuario )
		detalle = DetalleOrden.objects.get( id=carrito.detalle_orden.id )
		detalle.delete()

		if id_from:
			return redirect( 'detalle_producto', id=id_from )

		return redirect( 'inicio' )

	return redirect( 'inicio' )


@login_required
def pago_eliminar( request, id ):
	if request.method == 'POST':
		user = User.objects.get( username=request.user )
		usuario = Usuario.objects.get( user=user )
		carrito = Carrito.objects.get( id=id, usuario=usuario )
		detalle = DetalleOrden.objects.get( id=carrito.detalle_orden.id )
		detalle.delete()
		return redirect( 'pago' )

	return redirect( 'pago' )


def index_search( request ):
	context = { }
	search = request.GET.get( 'query' )
	codigo_moneda = "CLP"

	if search is not None:
		productos_search = Producto.objects.filter( nombre__contains=search )
		productList = []
		for producto_search in productos_search:
			producto_search.valor = format_currency( producto_search.valor,
				codigo_moneda, locale="es_CL" )
			productList.append( producto_search )
		context['productos'] = productList
	return render( request, 'index_search.html', context )
