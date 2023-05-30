from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.shortcuts import redirect, render




# login
def signup(request):
    if request.method == 'GET':
        return render(request, 'Login_usuario.html')
    else:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is None:
            return render(request, 'Login_usuario.html', {
                "error": "Usuario o contraseña son incorrectos"
            })

        login(request, user)
        request.session['user_session'] = user.username
        return redirect('inicio')


# 	registro
def signin(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    else:
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]
        if password1 == password2:
            try:
                username = request.POST["username"]
                user = User.objects.create_user(username, password=password1)
                user.save()

                nombre = request.POST["nombre"]
                telefono = request.POST["telefono"]
                direccion = request.POST["direccion"]
                usuario = Usuario.objects.create(email=username, nombre=nombre, telefono=telefono,
                                                 direccion=direccion)
                usuario.save()

                login(request, user)
                request.session['algo'] = 34234
                request.session['user_session'] = user.username
                return redirect('inicio')
            except IntegrityError:
                return render(request, 'register.html', {
                    "error": "El usuario ya existe"
                })

        return render(request, 'register.html', {
            "error": "Las contraseñas no coinciden"
        })


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
def signout(request):
    logout(request)
    return redirect('login')
