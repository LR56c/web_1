from django.db import models

class Producto(models.Model):
	id = models.AutoField(primary_key=True)
	valor = models.IntegerField()
	stock = models.IntegerField()
	imagen = models.URLField()
	nombre = models.CharField( max_length=30 )
	descripcion = models.CharField( max_length=100 )
	imageName = models.CharField( max_length=100)

class Oferta(models.Model):
	id = models.AutoField(primary_key=True)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	porcentaje = models.DecimalField( max_digits=3, decimal_places=2 )
	causa = models.CharField( max_length=100 )
	fecha_inicio = models.DateField()
	fecha_fin = models.DateField()

class Usuario(models.Model):
	email = models.EmailField(primary_key=True)
	nombre = models.CharField( max_length=60 )
	telefono = models.CharField( max_length=10 )
	direccion = models.CharField( max_length=50 )

class Orden(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	fecha = models.DateField()
	valor = models.IntegerField()
	estado = models.CharField( max_length=100 )


class DetalleOrden(models.Model):
	id = models.AutoField(primary_key=True)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
	cantidad = models.IntegerField()
	fecha = models.DateField()


class Carrito(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	detalle_orden = models.ForeignKey(DetalleOrden, on_delete=models.CASCADE)

class Envio(models.Model):
	id = models.AutoField(primary_key=True)
	orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
	estado = models.CharField( max_length=100 )
	compania = models.CharField( max_length=100 )
	numero_seguimiento = models.IntegerField()
	fecha = models.DateField()

class Suscripcion(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	monto = models.IntegerField()
	fecha_inicio = models.DateField()
	fecha_expiracion = models.DateField()

class Pago(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	numero_tarjeta = models.IntegerField()
	nombre_banco = models.CharField( max_length=60 )
	nombre_cliente = models.CharField( max_length=60 )
	codigo = models.IntegerField()

