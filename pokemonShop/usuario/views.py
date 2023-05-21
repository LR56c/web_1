from django.shortcuts import render

# Create your views here.
def login(request ):
	return render(request, 'Login_usuario.html')


def registro(request):
	return render(request, 'register.html')
