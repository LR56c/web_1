from django.shortcuts import render

# Create your views here.
def indexUser(request ):
	return render(request, 'index_usuario.html')
