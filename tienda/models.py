from django.db import models
from django.contrib.auth.models import User


class Oferta( models.Model ):
	id = models.AutoField( primary_key=True )
	name = models.CharField( max_length=100 )
	porcentaje = models.IntegerField()
	causa = models.CharField( max_length=100 )
	fecha_inicio = models.DateTimeField()
	fecha_fin = models.DateTimeField()

	def __str__( self ):
		return self.name


class Producto( models.Model ):
	id = models.AutoField( primary_key=True )
	valor = models.IntegerField()
	stock = models.IntegerField()
	imagen = models.URLField()
	nombre = models.CharField( max_length=30 )
	descripcion = models.CharField( max_length=100 )
	imageName = models.CharField( max_length=100 )
	oferta = models.ForeignKey( Oferta, on_delete=models.SET_NULL, null=True )

	def __str__( self ):
		return self.nombre


class Suscripcion( models.Model ):
	id = models.AutoField( primary_key=True )
	monto = models.IntegerField()
	numero_tarjeta = models.IntegerField()
	active = models.BooleanField()
	fecha_inicio = models.DateField()
	fecha_expiracion = models.DateField()
	def __str__( self ):
		return self.usuario_set.name + " esta " + 'activo' if self.active else 'inactivo'

class Usuario( models.Model ):
	user = models.OneToOneField( User, on_delete=models.CASCADE,
		primary_key=True )
	nombre = models.CharField( max_length=60 )
	telefono = models.CharField( max_length=10 )
	direccion = models.CharField( max_length=50 )
	suscripcion = models.ForeignKey( Suscripcion, on_delete=models.SET_NULL, null=True, blank=True )

	def __str__( self ):
		return self.nombre

class Tarjeta( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	numero_tarjeta = models.IntegerField()
	nombre_banco = models.CharField( max_length=60 )
	nombre_cliente = models.CharField( max_length=60 )
	codigo = models.IntegerField()
	anno_vencimiento = models.IntegerField()
	mes_vencimiento = models.IntegerField()
	def __str__( self ):
		return "Tarjeta id " + str(self.id) + " del cliente " + self.nombre_cliente


class DetalleOrden( models.Model ):
	id = models.AutoField( primary_key=True )
	producto = models.ForeignKey( Producto, on_delete=models.CASCADE )
	cantidad = models.IntegerField()
	monto = models.IntegerField()
	def __str__( self ):
		return "Detalle de orden " + str(self.id) + ", producto: " + self.producto.nombre

class Carrito( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	detalle_orden = models.ForeignKey( DetalleOrden, on_delete=models.CASCADE )
	def __str__( self ):
		return "Carrito " + str(self.id) + " del usuario " + self.usuario.nombre


class Envio( models.Model ):
	id = models.AutoField( primary_key=True )
	estado = models.CharField( max_length=100 )
	compania = models.CharField( max_length=100 )
	direccion = models.CharField( max_length=50 )
	numero_seguimiento = models.IntegerField()
	fecha = models.DateField()
	def __str__( self ):
		return "Envio " + str(self.id) + ", estado:" + self.estado

class Orden( models.Model ):
	id = models.AutoField( primary_key=True )
	usuario = models.ForeignKey( Usuario, on_delete=models.CASCADE )
	envio = models.ForeignKey( Envio, on_delete=models.CASCADE )
	fecha = models.DateTimeField()
	valor = models.IntegerField()
	estado = models.CharField( max_length=100 )
	def __str__( self ):
		return "Orden " + str(self.id) + " del usuario " + self.usuario.nombre

class Compra( models.Model ):
	id = models.AutoField( primary_key=True )
	detalle_orden = models.ForeignKey( DetalleOrden, on_delete=models.CASCADE )
	orden = models.ForeignKey( Orden, on_delete=models.CASCADE )
	def __str__( self ):
		return "Item " + str(self.id) + " de la orden " + str(self.orden.id) + " con el usuario " + self.orden.usuario.nombre


