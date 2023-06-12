from django.contrib import admin
from tienda.models import Oferta,  Usuario,Tarjeta,Envio,Orden,DetalleOrden,Compra,Producto,Carrito,Suscripcion


admin.site.register(Oferta)
admin.site.register(Usuario)
admin.site.register(Tarjeta)
admin.site.register(Envio)
admin.site.register(Orden)
admin.site.register(Compra)
admin.site.register(Producto)
admin.site.register(Carrito)
admin.site.register(Suscripcion)
admin.site.register(DetalleOrden)
