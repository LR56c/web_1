from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.shortcuts import redirect, render

# login
def signup(request ):
	if request.method == 'GET':
		return render( request, 'login_django.html', {
			"form": AuthenticationForm
		} )
	else:
		user = authenticate( request, username=request.POST['username'],
			password=request.POST['password'] )
		if user is None:
			return render( request, 'login_django.html', {
				"form" : AuthenticationForm,
				"error": "Username or password is incorrect."
			} )

		login( request, user )
		request.session['user_session'] = user.username
		return redirect( 'inicio')


# 	registro
def signin(request ):
	if request.method == 'GET':
		return render( request, 'register_django.html', {
			"form": UserCreationForm
		} )
	else:
		if request.POST["password1"] == request.POST["password2"]:
			try:
				user = User.objects.create_user( request.POST["username"],
					password=request.POST["password1"] )
				user.save()
				login( request, user )
				request.session['user_session'] = user.username
				return redirect( 'inicio' )
			except IntegrityError:
				return render( request, 'register_django.html', {
					"form" : UserCreationForm,
					"error": "Username already exists."
				} )

		return render( request, 'register_django.html', {
			"form" : UserCreationForm,
			"error": "Passwords did not match."
		} )


@login_required
def detalle_cuenta(request):
	return render(request, 'detalle_cuenta.html')

@login_required
def historial_pedidos(request):
	return render(request, 'historial_pedidos.html')

@login_required
def suscripcion(request):
	return render(request, 'suscripcion.html')

@login_required
def cambiar_contrasena(request):
	return render(request, 'cambiar_contrasena.html')

# logout
@login_required
def signout( request ):
	logout( request )
	return redirect( 'login' )
