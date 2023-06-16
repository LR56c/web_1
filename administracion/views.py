from babel.numbers import format_currency, format_decimal
import api.methods

from tienda.models import Oferta, Usuario
from django.contrib.auth.models import User

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from tienda.models import Producto


@login_required
def ver_descuento( request ):
	context = { }

	if request.method == 'GET':
		filtro = request.GET.get( 'filtro' )
		search = request.GET.get( 'search' )

		ofertas = None

		if filtro is not None:
			ofertas = Oferta.objects.order_by( filtro )
		elif search is not None:
			ofertas = Oferta.objects.filter( name__contains=search )
		else:
			ofertas = Oferta.objects.all()

		ofertasList = []

		for oferta in ofertas:
			ofertaEntry = { }
			fechaInicioString = str( oferta.fecha_inicio )
			fechaFinString = str( oferta.fecha_fin )

			ofertaEntry['fecha_inicio'] = api.methods.fecha( fechaInicioString )
			ofertaEntry['fecha_fin'] = api.methods.fecha( fechaFinString )

			ofertaEntry['porcentaje'] = oferta.porcentaje
			ofertaEntry['causa'] = oferta.causa
			ofertaEntry['name'] = oferta.name
			ofertaEntry['id'] = oferta.id
			ofertasList.append( ofertaEntry )

		context['ofertas'] = ofertasList
		context['sidebar_enabled'] = True
		context['ver_descuentos'] = True

		return render( request, 'ver_descuento.html', context )
	return redirect( '404' )


@login_required
def crear_producto( request ):
	context = { }
	ofertas = Oferta.objects.all()

	ofertasList = []

	for oferta in ofertas:
		ofertaEntry = { }
		fechaInicioString = str( oferta.fecha_inicio )
		fechaFinString = str( oferta.fecha_fin )

		ofertaEntry['fecha_inicio'] = api.methods.fecha( fechaInicioString )
		ofertaEntry['fecha_fin'] = api.methods.fecha( fechaFinString )

		ofertaEntry['porcentaje'] = oferta.porcentaje
		ofertaEntry['causa'] = oferta.causa
		ofertaEntry['name'] = oferta.name
		ofertaEntry['id'] = oferta.id
		ofertasList.append( ofertaEntry )

	context['ofertas'] = ofertasList
	context['sidebar_enabled'] = True
	return render( request, 'crear_producto.html', context )


@login_required
def ver_productos( request ):
	filtro = request.GET.get( 'filtro' )
	search = request.GET.get( 'search' )

	productos = None

	if filtro is not None:
		productos = Producto.objects.order_by( filtro )
	elif search is not None:
		productos = Producto.objects.filter( nombre__contains=search )
	else:
		productos = Producto.objects.all()

	for producto in productos:

		codigo_moneda = "CLP"
		producto.valor = format_currency( producto.valor, codigo_moneda,
			locale="es_CL" )
		producto.stock = format_decimal( producto.stock, locale='es_CL' )

	context = {
		'productos': productos,
	}

	context['sidebar_enabled'] = True
	context['ver_productos'] = True

	return render( request, 'ver_producto.html', context )


@login_required
def ver_usuarios( request ):
	try:
		users = User.objects.all().filter( is_staff=False )
		usuarios = []
		for user in users:
			usuario = Usuario.objects.get( user=user )

			if usuario.rol == 0:
				usuario.rol = 'cliente'
			elif usuario.rol == 1:
				usuario.rol = 'vendedor'

			usuarios.append( usuario )

		context = {
			'usuarios': usuarios,
		}
		context['sidebar_enabled'] = True
		context['ver_usuarios'] = True
		search = request.GET.get( 'search' )
		if search is not None:
			usuarios = Usuario.objects.filter( nombre__contains=search )
			context['usuarios'] = usuarios

		return render( request, 'ver_usuarios.html', context )
	except Exception as e:
		return redirect( '404' )


@login_required
def editar_producto( request, id ):
	try:
		context = { }

		producto = Producto.objects.get( id=id )
		ofertas = Oferta.objects.all()

		ofertasList = []

		for oferta in ofertas:
			ofertaEntry = { }
			fechaInicioString = str( oferta.fecha_inicio )
			fechaFinString = str( oferta.fecha_fin )

			ofertaEntry['fecha_inicio'] = api.methods.fecha( fechaInicioString )
			ofertaEntry['fecha_fin'] = api.methods.fecha( fechaFinString )

			ofertaEntry['porcentaje'] = oferta.porcentaje
			ofertaEntry['causa'] = oferta.causa
			ofertaEntry['name'] = oferta.name
			ofertaEntry['id'] = oferta.id
			ofertasList.append( ofertaEntry )

		context['ofertas'] = ofertasList
		context['producto'] = producto

		context['sidebar_enabled'] = True

		return render( request, 'editar_producto.html', context )
	# TODO: integrar con firebase
	except Exception as e:
		return redirect( '404' )


@login_required
def eliminar_producto( request, id ):
	try:
		producto = Producto.objects.get( id=id )
		producto.delete()
		return redirect( 'ver_productos' )
	except Exception as e:
		messages.error( request, 'No se pudo eliminar el producto' )
		return redirect( '404' )


@login_required
def editar_usuarios( request, id ):
	try:
		context = { }
		user = User.objects.get( id=id )
		usuario = Usuario.objects.get( user=user )
		context['id'] = user.id
		context['nombre'] = usuario.nombre
		context['email'] = user.email
		context['telefono'] = usuario.telefono
		context['direccion'] = usuario.direccion
		context['sidebar_enabled'] = True

		return render( request, 'editar_usuarios.html', context )
	except Exception as e:
		return redirect( '404' )


@login_required
def eliminar_usuarios( request, id ):
	try:
		user = User.objects.get( id=id )
		user.delete()
		return redirect( 'ver_usuarios' )
	except Exception as e:
		messages.error( request, 'No se pudo eliminar el usuario' )
		return redirect( '404' )


@login_required
def crear_descuento( request ):
	context = { }
	productos = Producto.objects.all()
	for producto in productos:

		codigo_moneda = "CLP"
		producto.valor = format_currency( producto.valor, codigo_moneda,
			locale="es_CL" )
		producto.stock = format_decimal( producto.stock, locale='es_CL' )
	context['productos'] = productos
	context['sidebar_enabled'] = True
	return render( request, 'crear_descuento.html', context )


@login_required
def editar_descuento( request, id ):
	try:
		context = { }
		oferta = Oferta.objects.get( id=id )
		context['id'] = oferta.id
		context['name'] = oferta.name
		context['porcentaje'] = oferta.porcentaje
		context['causa'] = oferta.causa
		context['fecha_inicio'] = api.methods.fechaDate( oferta.fecha_inicio )
		context['hora_inicio'] = api.methods.horaDate( oferta.fecha_inicio )
		context['fecha_fin'] = api.methods.fechaDate( oferta.fecha_fin )
		context['hora_fin'] = api.methods.horaDate( oferta.fecha_fin )
		productos = Producto.objects.all()
		for producto in productos:

			codigo_moneda = "CLP"
			producto.valor = format_currency( producto.valor, codigo_moneda,
				locale="es_CL" )
			producto.stock = format_decimal( producto.stock, locale='es_CL' )
		context['productos'] = productos
		context['sidebar_enabled'] = True
		return render( request, 'editar_descuento.html', context )
	except Exception as e:
		return redirect( '404' )


@login_required
def eliminar_descuento( request, id ):
	try:
		oferta = Oferta.objects.get( id=id )
		oferta.delete()
		return redirect( 'ver_descuentos' )
	except Exception as e:
		messages.error( request, 'No se pudo eliminar el descuento' )
		return redirect( '404' )
