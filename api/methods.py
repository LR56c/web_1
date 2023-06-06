import json
import re

from babel.numbers import format_currency
from django.contrib.auth.models import User
from tienda.models import Carrito, DetalleOrden, Producto, Usuario


def getCart(user_id):
	user = User.objects.get( username=user_id )
	usuario = Usuario.objects.get( user=user )

	carritoListUsuario = usuario.carrito_set.all()

	carritoListResult = []
	codigo_moneda = "CLP"
	montoTotal = 0

	for carrito in carritoListUsuario:
		carritoEntry = { }
		cantidad = carrito.detalle_orden.cantidad
		valorRaw = carrito.detalle_orden.producto.valor * cantidad

		valor = format_currency( valorRaw, codigo_moneda, locale="es_CL" )
		carritoEntry['valor'] = valor
		if carrito.detalle_orden.producto.oferta_id is not None:
			oferta = carrito.detalle_orden.producto.oferta
			rebajaRaw = (valorRaw - (valorRaw * (oferta.porcentaje / 100)))
			carritoEntry['rebaja'] = format_currency( rebajaRaw, codigo_moneda,
				locale="es_CL" )
			carritoEntry['descuento'] = oferta.porcentaje
			montoTotal += rebajaRaw
		else:
			montoTotal += valorRaw
			carritoEntry['descuento'] = '0'

		carritoEntry['id'] = carrito.detalle_orden.producto.id
		carritoEntry['carritoId'] = carrito.id
		carritoEntry['detalleId'] = carrito.detalle_orden.id

		carritoEntry['nombre'] = carrito.detalle_orden.producto.nombre
		carritoEntry['imagen'] = carrito.detalle_orden.producto.imagen
		carritoEntry['cantidad'] = cantidad

		carritoListResult.append( carritoEntry )

	totalFormat = format_currency( montoTotal, codigo_moneda,locale="es_CL" )
	# json.dumps()
	return carritoListResult, totalFormat

def save_to_cart(usuario, producto, cantidad ):
	try:
		monto = int( producto.valor ) * int( cantidad )
		detalle_orden = DetalleOrden.objects.create( producto=producto,cantidad=cantidad, monto=monto )
		carrito = Carrito.objects.create( usuario=usuario,detalle_orden=detalle_orden )
		carrito.save()
		detalle_orden.save()
		return True
	except Exception as e:
		return False
	ḉ

def fecha(fecha):
	regex = r"(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):"

	matchesStr = re.search( regex, str(fecha) )

	if matchesStr:
		year = matchesStr.group( 1 )
		month = matchesStr.group( 2 )
		day = matchesStr.group( 3 )
		hour = matchesStr.group( 4 )
		minutes = matchesStr.group( 5 )
		fechaFormat = f"{day}/{month}/{year} {hour}:{minutes}"
		return fechaFormat

def fechaDate(fecha):
	regex = r"(\d{4})-(\d{2})-(\d{2})"

	matchesStr = re.search( regex, str(fecha) )

	if matchesStr:
		year = matchesStr.group( 1 )
		month = matchesStr.group( 2 )
		day = matchesStr.group( 3 )
		fechaFormat = f"{day}/{month}/{year}"
		return fechaFormat
