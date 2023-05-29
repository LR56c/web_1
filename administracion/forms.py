from django import forms

from tienda.models import Oferta, OfertaProductos
class OfertaForm(forms.ModelForm):
	class Meta:
		model = Oferta
		fields = '__all__'

class OfertaProductosForm(forms.ModelForm):
	class Meta:
		model = OfertaProductos
		fields = '__all__'
