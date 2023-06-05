import json
from babel.numbers import format_currency

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.shortcuts import redirect, render

import api.methods
from tienda.models import Usuario


# login
def signup( request ):
	if request.method == 'GET':
		return render( request, 'Login_usuario.html' )
	else:
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate( request, username=username, password=password )
		if user is None:
			return render( request, 'Login_usuario.html', {
				"error": "Usuario o contraseña son incorrectos"
			} )

		login( request, user )
		request.session['user_session'] = user.username
		return redirect( 'inicio' )


# 	registro
def signin( request ):
	if request.method == 'GET':
		return render( request, 'register.html' )
	else:
		password1 = request.POST["password1"]
		password2 = request.POST["password2"]
		if password1 == password2:
			try:
				username = request.POST["username"]

				nombre = request.POST["nombre"]
				telefono = request.POST["telefono"]
				direccion = request.POST["direccion"]

				user = User.objects.create_user( username, password=password1,
					email=username, first_name=nombre )
				user.save()
				usuario = Usuario.objects.create( user=user, nombre=nombre,
					telefono=telefono, direccion=direccion )
				usuario.save()

				login( request, user=user )
				request.session['user_session'] = user.username
				return redirect( 'inicio' )
			except IntegrityError:
				return render( request, 'register.html', {
					"error": "El usuario ya existe"
				} )

		return render( request, 'register.html', {
			"error": "Las contraseñas no coinciden"
		} )


@login_required
def detalle_cuenta( request ):
	context = { }
	if request.method == 'GET':
		try:
			user = request.user
			usuario = Usuario.objects.get( user=user )

			context['nombre'] = usuario.nombre
			context['email'] = user.email
			context['telefono'] = usuario.telefono
			context['direccion'] = usuario.direccion
			return render( request, 'detalle_cuenta.html', context )
		except Exception as e:
			print( e )
			return redirect( '404' )

	return redirect( '404' )


@login_required
def historial_pedidos( request ):
	context = { }
	if request.method == 'GET':
		try:
			usuario = Usuario.objects.get( user=request.user )
			ordenes = usuario.orden_set.all( )
			ordenList = [ ]

			for orden in ordenes:
				ordenEntry = { }
				ordenEntry['id'] = orden.id
				ordenEntry['estado'] = orden.estado
				codigo_moneda = "CLP"
				ordenEntry['valor'] = format_currency( orden.valor, codigo_moneda,
					locale="es_CL" )

				ordenEntry['fecha'] = api.methods.fecha(orden.fecha)
				ordenList.append( ordenEntry )

			# context['ordenes'] = json.dumps(ordenList)
			context['ordenes'] = ordenList

			return render( request, 'historial_pedidos.html', context )
		except Exception as e:
			print( e )
			return redirect( '404' )
	return redirect( '404' )


@login_required
def suscripcion( request ):
	return render( request, 'suscripcion.html' )


@login_required
def cambiar_contrasena( request ):
	return render( request, 'cambiar_contrasena.html' )


# logout
@login_required
def signout( request ):
	logout( request )
	return redirect( 'login' )


@login_required
def detalle_cuenta_editar( request ):
	return render( request, 'detalle_cuenta_editar.html' )
