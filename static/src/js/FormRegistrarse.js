$( document )
	.ready( function () {
		let password1 = $( '#password1' )
		let password2 = $( '#password2' )
		let passEq    = $( '#pass-equals' )
		let form      = $( '#formulario5' )

		password1.on( 'input', function () {

			if ( password1.val() !== password2.val() ) {
				passEq.show()
			}
			else {
				passEq.hide()
			}
		} )

		password2.on( 'input', function () {
			if ( password1.val() !== password2.val() ) {
				passEq.show()
			}
			else {
				passEq.hide()
			}
		} )

		$( '#guardar1' )
			.click( function () {
				form.validate( {
					rules   : {
						nombre   : {
							required : true,
							maxlength: 50,
							minlength: 1
						},
						email    : {
							required: true
						},
						password1: {
							required : true,
							minlength: 8
						},
						telefono : {
							required : true,
							minlength: 9,
							maxlength: 9
						},
						direccion: {
							required: true
						},
						Acepto   : {
							required: true
						}
					},
					messages: {
						nombre   : {
							required : 'Debe ingresar un nombre.',
							maxlength: 'El nombre es demaciado largo.',
							minlength: 'El nombre es demaciado corto.'
						},
						email    : {
							required: 'Debe ingresar un email.'
						},
						password1: {
							required : 'Debe ingresar una contraseña.',
							minlength: 'La contraseña debe ser de 8 caracteres o más.'
						},
						telefono : {
							required : 'Debe ingresar un numero celular.',
							minlength: 'son 9 digitos.'
						},
						direccion: {
							required: 'Ingrese un correo electronico valido.'
						},
						Acepto   : {
							required: 'Debe aceptar las condiciones.'
						}
					}
				} )

				if ( !form.valid() && password1.val() !== password2.val() ) {
					passEq.show()
					return
				}

				passEq.hide()

			} )

	} )
