import json
from babel.numbers import format_currency, format_decimal
from datetime import datetime, timedelta
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
from tienda.models import Oferta, Pago, Producto, Suscripcion, Usuario

pokemonAccesoriesList = ["Gorra de Ash Ketchum", "Bufanda de Pikachu",
	"Mochila de Pokémon", "Calcetines con diseños de Poké Balls",
	"Camiseta con el logotipo de Pikachu", "Sudadera con capucha de Eevee",
	"Zapatillas con estampado de Poké Balls",
	"Pulsera con colgantes de los distintos tipos de Pokémon",
	"Pañuelo con ilustraciones de los Pokémon iniciales",
	"Cinturón con un broche en forma de Poké Ball",
	"Pendientes en forma de Pikachu",
	"Chaqueta con el estampado del mapa de la región de Kanto",
	"Guantes con diseño de Pikachu", "Gafas de sol con forma de Poké Balls",
	"Pañuelo con estampado de Pokémon legendarios",
	"Parche o pin de la insignia de un líder de gimnasio",
	"Cartera con ilustraciones de los iniciales de todas las generaciones",
	"Reloj con la esfera con forma de Poké Ball",
	"Pijama con estampado de Pokémon",
	"Anillo con incrustaciones de gemas en forma de Pokémon"]

priceList = [5175, 14326, 8250, 12008, 6387, 17392, 4563, 9891, 2154, 15279,
	3866, 10943, 6331, 18457, 7926, 3982, 11873, 2955, 16240, 7451, ]

discountList = [30, 57, 12, 84, 41, 76, 5, 93, 23, 68, 38, 71, 16, 89, 47, 63,
	9, 77, 52, 88, ]

uuidList = ["651be91d-9e34-4c8b-8aeb-88f8e748ea5e",
	"26f56348-0e85-4e0f-9ed9-d238f6a8b6a4",
	"d4fb0f92-8e4b-4d5d-bb5d-1f668cd44c18",
	"7ff75c3a-8de3-4d3c-9a9c-086b8f1b864f",
	"a18fb889-06ed-431a-a0ab-1c7be9f879b8",
	"503d0810-662e-458e-9f2c-cf0b136d9b9c",
	"c8f31e24-dc7f-4343-b46a-8b1763f25e7d",
	"92411de4-4df4-4e3d-912c-1f96156be5e5",
	"0e369cf2-10f2-4c10-8326-d61b6b8a57b9",
	"a99f9f78-bca6-4a37-8744-1e3b1e249af4",
	"e5e0b2a6-738c-4942-8991-5486b66047e4",
	"716eb0dc-97be-4c87-af42-1e079d77ebe6",
	"39c29968-c2a7-4b57-9906-879d6ef184fb",
	"d0e88845-8549-4cb4-9444-8e19f7b53260",
	"2e2f3a3a-9c6b-41bc-b042-99257eab41c7",
	"8196c19f-55a9-4b24-96da-5d5dbbc3c3e7",
	"f5d1c687-39b9-4567-9c14-2a2d90fb157a",
	"645543b5-07b7-4e8b-9b97-d978157e61d2",
	"b8e45684-51ef-46f7-ae07-063cc6979bb5",
	"15c7f06c-3e0e-4df1-991b-6091273c6f9e", ]

data = { }
for i in range( len( pokemonAccesoriesList ) ):
	data[str( i )] = {
		'id'      : uuidList[i],
		'name'    : pokemonAccesoriesList[i],
		'price'   : priceList[i],
		'discount': discountList[i]
	}

offerList = [12, 4, 18, 10, 7, 2, 15, 9, 3, 16, ]

offerData = { }
for i in range( len( offerList ) ):
	offerData[str( i )] = {
		'id'      : uuidList[offerList[i]],
		'name'    : pokemonAccesoriesList[offerList[i]],
		'price'   : priceList[offerList[i]],
		'discount': discountList[offerList[i]]
	}


def productsData( request ):
	return JsonResponse( data )


def offer( request ):
	return JsonResponse( offerData )


subcriptionData = {
	'sub': False,
}


@login_required
def suscripcion_crear( request ):
		if request.method == 'POST':
			try:
				usuario = Usuario.objects.get( user=request.user)
				fecha_inicio = datetime.now()
				fecha_expiracion = fecha_inicio + timedelta( days=30 )
				monto_cobrar = 1000
				suscripcion = Suscripcion.objects.create(usuario=usuario, monto=monto_cobrar, active=True, fecha_inicio=fecha_inicio, fecha_expiracion=fecha_expiracion)
				suscripcion.save()
				try:
					pago = Pago.objects.get( usuario=usuario)
				except Exception as e:
					nombre = request.POST.get( 'nombre')
					apellido = request.POST.get( 'apellido')
					nombre_cliente = nombre + ' ' + apellido

					nombre_banco = request.POST.get( 'banco')

					numero_tarjeta = request.POST.get( 'tarjeta')
					codigo = request.POST.get( 'clave')
					anno_vencimiento = request.POST.get( 'ano')
					mes_vencimiento = request.POST.get( 'mes')

					pago = Pago.objects.create( usuario=usuario, numero_tarjeta=numero_tarjeta, nombre_banco=nombre_banco, nombre_cliente=nombre_cliente, codigo=codigo, anno_vencimiento=anno_vencimiento, mes_vencimiento=mes_vencimiento)
					pago.save()

				return redirect( 'suscripcion' )
			except Exception as e:
				return redirect( '404' )
		return redirect( '404' )

@login_required
def suscripcion_cancelar( request ):
	if request.method == 'POST':
		try:
			# suscripcion_id = request.POST.get( 'suscripcion_id')
			usuario = Usuario.objects.get( user=request.user)
			suscripcion = usuario.suscripcion_set.all().get( active=True )
			suscripcion.active = False
			suscripcion.save()
			pago = Pago.objects.get( usuario=usuario )
			pago.delete()
			return redirect( 'suscripcion' )
		except Exception as e:
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
			oferta = Oferta.objects.get( id=oferta )

			image_url = producto.imagen

			if imagen is not None:
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
