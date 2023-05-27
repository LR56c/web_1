from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def index(request):
    # context = {
    #   'user': request.session['user']
    # }
    return render(request, 'index_tienda.html')

def error_page(request ):
    return render(request, '404.html')

@login_required
def orden(request):
    return render(request, 'orden.html')

@login_required
def pago(request):
    return render(request, 'pago.html')

@login_required
def detalle_producto(request):
    return render(request, 'detalle_producto.html')
