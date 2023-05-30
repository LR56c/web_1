from django.db import models


class ProductoImagenes( models.Model ):
	id = models.AutoField( primary_key=True )
	imagen = models.URLField()


class Producto( models.Model ):
	id = models.AutoField( primary_key=True )
	valor = models.IntegerField()
	stock = models.IntegerField()
	imagen = models.URLField()
	# imagenes_secundarias = models.ForeignKey(ProductoImagenes,
	# on_delete=models.CASCADE)
	nombre = models.CharField( max_length=30 )
	descripcion = models.CharField( max_length=100 )
	imageName = models.CharField( max_length=100 )


class Oferta( models.Model ):
	id = models.AutoField( primary_key=True )
	name = models.CharField( max_length=100 )
	porcentaje = models.IntegerField()
	causa = models.CharField( max_length=100 )
	# DateTime format: DD-MM-YYYY HH:MM
	fecha_inicio = models.CharField( max_length=20 )
	# DateTime format: DD-MM-YYYY HH:MM
	fecha_fin = models.CharField( max_length=20 )


class OfertaProductos( models.Model ):
	oferta = models.ForeignKey( Oferta, on_delete=models.CASCADE )
	producto = models.ForeignKey( Producto, on_delete=models.CASCADE )


class Usuario( models.Model ):
	email = models.EmailField( primary_key=True )
	nombre = models.CharField( max_length=60 )
	telefono = models.CharField( max_length=10 )
	direccion = models.CharField( max_length=50 )


class Orden( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	# DateTime format: DD-MM-YYYY HH:MM
	fecha = models.CharField( max_length=20 )
	# Monto total con iva y descuentos
	valor = models.IntegerField()
	estado = models.CharField( max_length=100 )


class DetalleOrden( models.Model ):
	id = models.AutoField( primary_key=True )
	producto = models.ForeignKey( Producto, on_delete=models.CASCADE )
	orden = models.ForeignKey( Orden, on_delete=models.CASCADE )
	cantidad = models.IntegerField()
	fecha = models.CharField( max_length=20 )


class Carrito( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	detalle_orden = models.ForeignKey( DetalleOrden, on_delete=models.CASCADE )


class Envio( models.Model ):
	id = models.AutoField( primary_key=True )
	orden = models.ForeignKey( Orden, on_delete=models.CASCADE )
	estado = models.CharField( max_length=100 )
	compania = models.CharField( max_length=100 )
	numero_seguimiento = models.IntegerField()
	# Date format: DD-MM-YYYY
	fecha = models.CharField( max_length=20 )


class Suscripcion( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	monto = models.IntegerField()
	# Date format: DD-MM-YYYY
	fecha_inicio = models.CharField( max_length=20 )
	# Date format: DD-MM-YYYY
	fecha_expiracion = models.CharField( max_length=20 )


class Pago( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	numero_tarjeta = models.IntegerField()
	nombre_banco = models.CharField( max_length=60 )
	nombre_cliente = models.CharField( max_length=60 )
	codigo = models.IntegerField()
	anno_vencimiento = models.IntegerField()
	mes_vencimiento = models.IntegerField()


class Bookmark( models.Model ):
	id = models.AutoField( primary_key=True )
	nombre = models.CharField( max_length=60 )
	fecha = models.DateTimeField()
