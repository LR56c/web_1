from django.db import models

class ProductoImagenes(models.Model):
	id = models.AutoField(primary_key=True)
	imagen = models.URLField()

class Producto(models.Model):
	id = models.AutoField(primary_key=True)
	valor = models.IntegerField()
	stock = models.IntegerField()
	imagen = models.URLField()
	# imagenes_secundarias = models.ForeignKey(ProductoImagenes, on_delete=models.CASCADE)
	nombre = models.CharField( max_length=30 )
	descripcion = models.CharField( max_length=100 )
	imageName = models.CharField( max_length=100)

class Oferta(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField( max_length=100 )
	porcentaje = models.DecimalField( max_digits=3, decimal_places=2 )
	causa = models.CharField( max_length=100 )
	fecha_inicio = models.DateTimeField()
	fecha_fin = models.DateTimeField()

class OfertaProductos(models.Model):
	oferta = models.ForeignKey(Oferta, on_delete=models.CASCADE)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)


class Usuario(models.Model):
	email = models.EmailField(primary_key=True)
	nombre = models.CharField( max_length=60 )
	telefono = models.CharField( max_length=10 )
	direccion = models.CharField( max_length=50 )

class Orden(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	fecha = models.DateTimeField()
	valor = models.IntegerField()
	estado = models.CharField( max_length=100 )


class DetalleOrden(models.Model):
	id = models.AutoField(primary_key=True)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
	cantidad = models.IntegerField()
	fecha = models.DateTimeField()


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
	fecha = models.DateTimeField()

class Suscripcion(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	monto = models.IntegerField()
	fecha_inicio = models.DateTimeField()
	fecha_expiracion = models.DateTimeField()

class Pago(models.Model):
	id = models.AutoField(primary_key=True)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	numero_tarjeta = models.IntegerField()
	nombre_banco = models.CharField( max_length=60 )
	nombre_cliente = models.CharField( max_length=60 )
	codigo = models.IntegerField()

# tabla 1
class Author(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=100)
	age = models.IntegerField()

# tabla 2 foreign key
class Books(models.Model):
	id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=100)
	# id_author
	author = models.ForeignKey(Author, on_delete=models.CASCADE)
