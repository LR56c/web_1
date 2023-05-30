from django import forms

from tienda.models import Oferta
class OfertaForm(forms.ModelForm):
	class Meta:
		model = Oferta
		fields = '__all__'
