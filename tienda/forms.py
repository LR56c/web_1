from django import forms

from tienda.models import Tarjeta


class TarjetaForm(forms.ModelForm):
	class Meta:
		model = Tarjeta
		fields = '__all__'
