import json
from babel.numbers import format_currency, format_decimal
from datetime import timedelta
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
import os
from datetime import datetime
from django.core import serializers
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.http import JsonResponse
from django.shortcuts import redirect
from firebase_admin import storage

import api.methods
from pokemonShop import settings
from tienda.models import Oferta, Tarjeta, Producto, Suscripcion, Usuario




@login_required
def suscripcion_crear( request ):
		if request.method == 'POST':
			try:
				usuario = Usuario.objects.get( user=request.user)
				num = request.POST.get( 'num-val' )
				fecha_inicio = datetime.now()
				fecha_expiracion = fecha_inicio + timedelta( days=30 )
				monto_cobrar = 1000
				tarjeta = Tarjeta.objects.get( usuario=usuario, id=num )
				suscripcion = Suscripcion.objects.create(usuario=usuario, monto=monto_cobrar,
					active=True, fecha_inicio=fecha_inicio, fecha_expiracion=fecha_expiracion,
					numero_tarjeta=tarjeta.numero_tarjeta
				)
				suscripcion.save()
				if usuario.suscripcion is not None:
					usuario.suscripcion.active = False
					usuario.suscripcion.save()

				usuario.suscripcion = suscripcion
				usuario.save()

				return redirect( 'suscripcion' )
			except Exception as e:
				return redirect( '404' )
		return redirect( '404' )

@login_required
def suscripcion_cancelar( request ):
	if request.method == 'POST':
		try:
			# suscripcion_id = request.POST.get( 'suscripcion_id')
			print( 'entro')
			usuario = Usuario.objects.get( user=request.user)
			suscripcion = usuario.suscripcion
			suscripcion.delete()
			print( 'entro' )
			return redirect( 'suscripcion' )
		except Exception as e:
			print( 'eee' )
			print( e )
			return redirect( '404' )
	return redirect( '404' )


def product_get( request, id ):
	context = { }

	if request.method == 'GET':
		try:
			producto = Producto.objects.get( id=id )
			context['producto'] = producto

		# return render( request, 'ver_producto.html', context, status=200 )
		except Exception as e:
			pass

	return redirect( 'index' )


def product_edit( request, id ):
	context = { }

	if request.method == 'POST':
		try:
			producto = Producto.objects.get( id=id )
			valor = request.POST.get( 'valor' )
			stock = request.POST.get( 'stock' )
			imagen = request.FILES.get( 'imagen' )
			nombre = request.POST.get( 'nombre' )
			descripcion = request.POST.get( 'descripcion' )
			imageName = request.POST.get( 'imageName' )
			oferta = request.POST.get( 'oferta' )

			if oferta == '':
				oferta = None
			else:
				oferta = Oferta.objects.get( id=oferta )


			image_url = producto.imagen

			if imageName == '':
				imageName = producto.imageName
			else:
				firebaseDelete( producto.imageName )
				image_url = firebaseUpload( imagen )

			producto.valor = valor
			producto.stock = stock
			producto.imagen = image_url
			producto.nombre = nombre
			producto.descripcion = descripcion
			producto.imageName = imageName
			producto.oferta = oferta
			producto.save()

			context['success'] = True

			return JsonResponse( context, status=200 )
		except Exception as e:
			context['success'] = False

	return JsonResponse( context, status=404 )


def products( request ):
	context = { }

	if request.method == 'GET':
		productos = Producto.objects.all()

		for producto in productos:

			codigo_moneda = "CLP"
			producto.valor = format_currency( producto.valor, codigo_moneda,
				locale="es_CL" )
			producto.stock = format_decimal( producto.stock, locale='es_CL' )

		context['productos'] = serializers.serialize( 'json', productos )
		return JsonResponse( context, status=200 )

	return JsonResponse( context, status=404 )


def product_create( request ):
	context = { }
	if request.method == 'POST':
		valor = request.POST.get( 'valor' )
		nombre = request.POST.get( 'nombre' )
		imagen = request.FILES.get( 'imagen' )
		stock = request.POST.get( 'stock' )
		imageName = request.POST.get( 'imageName' )
		descripcion = request.POST.get( 'descripcion' )
		oferta = request.POST.get( 'oferta' )
		image_url = firebaseUpload( imagen )

		if len( oferta ) == 0:
			oferta = None
		else:
			oferta = Oferta.objects.get( id=oferta )

		try:
			producto = Producto.objects.create( valor=valor, nombre=nombre,
				imagen=image_url, imageName=imageName, stock=stock,
				descripcion=descripcion, oferta=oferta )
			producto.save()

			context['success'] = True
			return JsonResponse( context, status=200 )
		except Exception as e:
			context['success'] = False

			context['errors'] = {
				'message': f'Error en creacion de producto',
			}

	return JsonResponse( context, status=404 )


def firebaseUpload( imagen ):
	imagen: InMemoryUploadedFile = imagen
	temp_image_path = os.path.join( settings.STATIC_URL, 'imagens_temp',
		imagen.name )
	with open( temp_image_path, 'wb' ) as temp_image_file:
		temp_image_file.write( imagen.read() )
	bucket = storage.bucket()
	ruta_en_storage = imagen.name
	blob = bucket.blob( ruta_en_storage )
	blob.upload_from_filename( temp_image_path )
	blob.make_public()
	os.remove( temp_image_path )
	return blob.public_url


def product_delete( request, id ):
	context = { }

	if request.method == 'GET':
		producto = Producto.objects.get( id=id )
		if producto:

			firebaseDelete( producto.imageName )

			producto.delete()
			context['success'] = True
			return JsonResponse( context, status=200 )
		else:
			context['errors'] = ['Producto no encontrado']

	return JsonResponse( context, status=404 )


def firebaseDelete( imagen_url ):
	bucket = storage.bucket()
	blob = bucket.blob( imagen_url )
	blob.delete()


def getHistorial( request ):
	context = { }

	if request.method == 'GET':

		# guarda el user del usuario iniciado para.
		email = request.session['user_session']

		user_query = User.objects.filter( username=email )

		# valida que el usuario existe.
		if user_query.exists():

			usuario = user_query.get().usuario

			usuario_ordenes_query = usuario.orden_set.all()

			ordenes = []
			for orden in usuario_ordenes_query:
				ordenEntry = {
					'id'       : orden.id,
					'estado'   : orden.estado,
					'valor'    : orden.valor,
					'direccion': usuario.direccion
				}
				ordenes.append( ordenEntry )

			context['ventas'] = json.dumps( ordenes )

			return JsonResponse( context, status=200 )

	return JsonResponse( context, status=404 )


def get_ofertas( request ):
	context = { }

	if request.method == 'GET':
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

		# json stringify / json.dumps (pero con clases)
		# context['ofertas'] = serializers.serialize( 'json', ofertas )

		context['ofertas'] = json.dumps( ofertasList )
		return JsonResponse( context, status=200 )

	return JsonResponse( context, status=404 )


def create_ofertas( request ):
	context = { }
	if request.method == 'POST':
		name = request.POST.get( 'name' )
		porcentaje = request.POST.get( 'porcentaje' )
		causa = request.POST.get( 'causa' )

		fechaInicio = request.POST.get( 'fecha_inicio' )
		partesFechaInicio = fechaInicio.split( ',' )
		diaInicio = partesFechaInicio[0]
		mesInicio = partesFechaInicio[1]
		anoInicio = partesFechaInicio[2]
		horaInicio = partesFechaInicio[3]
		minutoInicio = partesFechaInicio[4]

		dateFechaInicio = datetime( int( anoInicio ), int( mesInicio ),
			int( diaInicio ), int( horaInicio ), int( minutoInicio ) )

		fechaFin = request.POST.get( 'fecha_fin' )
		partesFechaFin = fechaFin.split( ',' )
		diaFin = partesFechaFin[0]
		mesFin = partesFechaFin[1]
		anoFin = partesFechaFin[2]
		horaFin = partesFechaFin[3]
		minutoFin = partesFechaFin[4]

		dateFechaFin = datetime( int( anoFin ), int( mesFin ), int( diaFin ),
			int( horaFin ), int( minutoFin ) )

		if dateFechaInicio and dateFechaFin:
			try:
				oferta = Oferta.objects.create( name=name, porcentaje=porcentaje,
					causa=causa, fecha_inicio=dateFechaInicio, fecha_fin=dateFechaFin, )
				oferta.save()

				# json en linea
				productos_ids_string = request.POST.get( 'data' )

				# json en lista, gracias al json loads (parse de JS)
				productos_list = json.loads( productos_ids_string )

				# stringify de JS
				# json.dumps()

				for productoId in productos_list:
					try:
						# 	SELECT * FROM producto WHERE id = 1
						productEntry = Producto.objects.get( id=productoId )
						productEntry.oferta = oferta
						productEntry.save()
					except Exception as e:

						context['success'] = False
						context['errors'] = {
							'message': f'Error en el producto {productoId}',
						}
						return JsonResponse( context, status=404 )

				context['success'] = True
				return JsonResponse( context, status=200 )
			except Exception as e:

				context['success'] = False
				context['errors'] = {
					'message': f'Error en la oferta',
				}
				return JsonResponse( context, status=404 )

		else:
			context['errors'] = {
				'message': 'Fechas incorrectas',
			}
			return JsonResponse( context, status=404 )
	return JsonResponse( context, status=404 )


def getUsuarios( request ):
	context = { }

	if request.method == 'GET':
		users = User.objects.all()
		usuarios = Usuario.objects.all()
		userResponse = []
		for user in users:
			if not user.is_staff:
				usuario = usuarios.get( user=user )
				userEntry = { }
				userEntry['id'] = user.id
				userEntry['nombre'] = user.first_name
				userEntry['correo'] = user.email
				userEntry['telefono'] = usuario.telefono
				userEntry['direccion'] = usuario.direccion

				userResponse.append( userEntry )

		context['usuarios'] = json.dumps( userResponse )
		return JsonResponse( context, status=200 )

	return JsonResponse( context, status=404 )


def getCarrito( request ):
	context = { }
	if request.method == 'GET':
		try:
			userEmail = request.user
			carrito, montoTotal = api.methods.getCart( userEmail )
			context['carrito'] = carrito
			context['montoTotal'] = montoTotal
			return JsonResponse( context, status=200 )
		except Exception as e:
			return JsonResponse( context, status=404 )


def editUsuario( request ):
	context = { }
	if request.method == 'POST':
		try:
			user = request.user
			usuario = Usuario.objects.get( user=user )

			name = request.POST.get( 'name' )
			email = request.POST.get( 'email' )
			telefono = request.POST.get( 'telefono' )
			direccion = request.POST.get( 'direccion' )

			user.first_name = name
			user.email = email
			user.username = email
			user.save()

			usuario.nombre = name
			usuario.telefono = telefono
			usuario.direccion = direccion
			usuario.save()

			context['success'] = True

			return JsonResponse( context, status=200 )

		except Exception as e:
			context['success'] = False
			return JsonResponse( context, status=404 )

	return JsonResponse( context, status=404 )

@login_required
def editar_usuarios( request, id ):
	context = { }
	if request.method == 'POST':
		try:
			user = request.user
			usuario = Usuario.objects.get( user=user )

			name = request.POST.get( 'name' )
			email = request.POST.get( 'email' )
			telefono = request.POST.get( 'telefono' )
			direccion = request.POST.get( 'direccion' )

			user.first_name = name
			user.email = email
			user.username = email
			user.save()

			usuario.nombre = name
			usuario.telefono = telefono
			usuario.direccion = direccion
			usuario.save()

			context['success'] = True

			return JsonResponse( context, status=200 )

		except Exception as e:
			context['success'] = False
			return JsonResponse( context, status=404 )

	return JsonResponse( context, status=404 )


@login_required
def edit_ofertas( request ):
	context = { }
	if request.method == 'POST':
		idDescuento = request.POST.get( 'id-descuento' )
		name = request.POST.get( 'name' )
		porcentaje = request.POST.get( 'porcentaje' )
		causa = request.POST.get( 'causa' )

		fechaInicio = request.POST.get( 'fecha_inicio' )
		partesFechaInicio = fechaInicio.split( ',' )
		diaInicio = partesFechaInicio[0]
		mesInicio = partesFechaInicio[1]
		anoInicio = partesFechaInicio[2]
		horaInicio = partesFechaInicio[3]
		minutoInicio = partesFechaInicio[4]

		dateFechaInicio = datetime( int( anoInicio ), int( mesInicio ),
			int( diaInicio ), int( horaInicio ), int( minutoInicio ) )

		fechaFin = request.POST.get( 'fecha_fin' )
		partesFechaFin = fechaFin.split( ',' )
		diaFin = partesFechaFin[0]
		mesFin = partesFechaFin[1]
		anoFin = partesFechaFin[2]
		horaFin = partesFechaFin[3]
		minutoFin = partesFechaFin[4]

		dateFechaFin = datetime( int( anoFin ), int( mesFin ), int( diaFin ),
			int( horaFin ), int( minutoFin ) )

		if dateFechaInicio and dateFechaFin:
			try:
				oferta = Oferta.objects.get( id=idDescuento )
				oferta.name = name
				oferta.porcentaje = porcentaje
				oferta.causa = causa
				oferta.fecha_inicio = dateFechaInicio
				oferta.fecha_fin = dateFechaFin
				oferta.save()

				productos_ids_string = request.POST.get( 'toAdd' )
				productos_removed_ids_string = request.POST.get( 'toRemove' )
				productos_list = json.loads( productos_ids_string )
				productos_removed_list = json.loads( productos_removed_ids_string )

				if len( productos_list ) >= 0:
					for productoId in productos_list:
						try:
							productEntry = Producto.objects.get( id=productoId )
							productEntry.oferta = oferta
							productEntry.save()
						except Exception as e:

							context['success'] = False
							context['errors'] = {
								'message': f'Error en el producto {productoId}',
							}
							return JsonResponse( context, status=404 )

				if len( productos_removed_list ) >= 0:
					for productoId in productos_removed_list:
						try:
							productEntry = Producto.objects.get( id=productoId )
							productEntry.oferta = None
							productEntry.save()
						except Exception as e:

							context['success'] = False
							context['errors'] = {
								'message': f'Error en el producto {productoId}',
							}
							return JsonResponse( context, status=404 )

				products = Producto.objects.filter( oferta=oferta )
				productsIds = [ ]
				for product in products:
					productsIds.append( product.id )

				context['products'] = productsIds
				context['success'] = True
				return JsonResponse( context, status=200 )
			except Exception as e:

				context['success'] = False
				context['errors'] = {
					'message': f'Error en la oferta',
				}
				return JsonResponse( context, status=404 )

		else:
			context['errors'] = {
				'message': 'Fechas21 incorrectas',
			}
			return JsonResponse( context, status=404 )
	return JsonResponse( context, status=404 )


@login_required
def crear_tarjeta( request ):
	if request.method == 'POST':
			try:
				usuario = Usuario.objects.get( user=request.user )

				nombre = request.POST.get( 'nombre' )
				apellido = request.POST.get( 'apellido' )
				nombre_cliente = nombre + ' ' + apellido

				nombre_banco = request.POST.get( 'banco' )

				numero_tarjeta = request.POST.get( 'tarjeta' )
				codigo = request.POST.get( 'clave' )
				anno_vencimiento = request.POST.get( 'ano' )
				mes_vencimiento = request.POST.get( 'mes' )

				pago = Tarjeta.objects.create( usuario=usuario,
					numero_tarjeta=numero_tarjeta, nombre_banco=nombre_banco,
					nombre_cliente=nombre_cliente, codigo=codigo,
					anno_vencimiento=anno_vencimiento, mes_vencimiento=mes_vencimiento )

				pago.save()
				return redirect('detalle_cuenta')
			except Exception as e:
				return redirect('404')
	else:
		return redirect('404')


@login_required
def eliminar_tarjeta( request ):
	if request.method == 'POST':
		try:
			# usuario = Usuario.objects.get( user=request.user )
			tarjeta_id = request.POST.get( 'tarjeta_id' )
			tarjeta = Tarjeta.objects.get( id=tarjeta_id )
			tarjeta.delete()
			return redirect('detalle_cuenta')
		except Exception as e:
			return redirect('404')
	else:
		return redirect('404')
