const buttonEnable = [
	'ml-6',
	'text-white',
	'bg-gradient-to-r',
	'from-cyan-500',
	'to-blue-500',
	'hover:bg-gradient-to-bl',
	'focus:ring-4',
	'focus:outline-none',
	'focus:ring-blue-300',
	'font-medium',
	'rounded-lg',
	'text-sm',
	'px-5',
	'py-2.5',
	'text-center'
]

const buttonDisable = [
	'text-white',
	'bg-blue-400',
	'dark:bg-blue-500',
	'cursor-not-allowed',
	'font-medium',
	'rounded-lg',
	'text-sm',
	'px-5',
	'py-2.5',
	'text-center'
]


$( document )
	.ready( function () {
		let nombre       = $( '#nombre' )
		let apellido     = $( '#apellido' )
		let banco        = $( '#banco' )
		let tarjeta      = $( '#tarjeta' )
		let mes          = $( '#mes' )
		let ano          = $( '#ano' )
		let clave        = $( '#clave' )
		let form         = $( '#formulario1' )
		let buttonSubmit = $( '#guardar1' )

		function validarForm() {
			form.validate( {
				rules   : {
					nombre: {
						required : true,
						minlength: 1,
						maxlength: 50
					},

					apellido: {
						required : true,
						minlength: 1,
						maxlength: 50
					},

					banco: {
						required : true,
						minlength: 1,
						maxlength: 50
					},

					tarjeta: {
						required : true,
						minlength: 16,
						maxlength: 16
					},

					mes: {
						required: true,
						number  : true,
						min     : 1,
						max     : 12
					},

					ano: {
						required : true,
						minlength: 2,
						maxlength: 2
					},

					clave: {
						required : true,
						minlength: 3,
						maxlength: 3
					}

				},
				messages:
					{
						nombre  : {
							required : 'Ingrese un nombre',
							minlength: 'Debe tener almenos 1 caracter',
							maxlength: 'Debe tener maximo 50 caracter'
						},
						apellido: {
							required : 'Ingrese un apellido',
							minlength: 'Debe tener almenos 1 caracter',
							maxlength: 'Debe tener maximo 50 caracter'
						},
						banco   : {
							required : 'Ingrese un banco valido',
							minlength: 'Debe tener almenos 1 caracter',
							maxlength: 'Debe tener maximo 50 caracter'
						},
						tarjeta : {
							required : 'Ingrese una tarjeta valida',
							minlength: 'La tarjeta debe tener 16 digitos',
							maxlength: 'La tarjeta debe tener 16 digitos'
						},
						mes     : {
							required: 'Ingrese un mes valido',
							number  : 'Solo numeros del 01 al 12',
							min     : 'Solo numeros del 01 al 12',
							max     : 'Solo numeros del 01 al 12'
						},
						ano     : {
							required : 'Ingrese un año valido',
							minlength: 'Solo los dos ultimos digitos del año',
							maxlength: 'Solo los dos ultimos digitos del año'
						},
						clave   : {
							required : 'Ingrese una clave valida',
							minlength: 'La clave debe tener 3 digitos',
							maxlength: 'La clave debe tener 3 digitos'
						}
					}
			} )

			if ( form.valid() ) {
				buttonSubmit.prop( 'disabled', false )
				buttonSubmit.removeClass( buttonDisable.join( ' ' ) )
				buttonSubmit.addClass( buttonEnable.join( ' ' ) )
			}
			else {
				buttonSubmit.prop( 'disabled', true )
				buttonSubmit.removeClass( buttonEnable.join( ' ' ) )
				buttonSubmit.addClass( buttonDisable.join( ' ' ) )
			}
		}

		buttonSubmit.prop( 'disabled', true )
		buttonSubmit.removeClass( buttonEnable.join( ' ' ) )
		buttonSubmit.addClass( buttonDisable.join( ' ' ) )

		nombre.on( 'input', function () {
			validarForm()
		} )

		apellido.on( 'input', function () {
			validarForm()
		} )

		banco.on( 'input', function () {
			validarForm()
		} )

		tarjeta.on( 'input', function () {
			validarForm()
		} )

		mes.on( 'input', function () {
			validarForm()
		} )

		ano.on( 'input', function () {
			validarForm()
		} )

		clave.on( 'input', function () {
			validarForm()
		} )
	} )

