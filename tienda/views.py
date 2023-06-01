from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def index(request):
    return render(request, 'index_tienda.html')

def custom_404(request):
    return render(request, '404.html', status=404)

@login_required
def orden(request):
    return render(request, 'orden.html')

@login_required
def pago(request):
    return render(request, 'pago.html')

@login_required
def detalle_producto(request):
    return render(request, 'detalle_producto.html')
