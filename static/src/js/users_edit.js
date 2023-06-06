const swalWithBootstrapButtons = Swal.mixin( {
	customClass   : {
		confirmButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
		cancelButton : 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
	},
	buttonsStyling: false
} )

const options = {
	placement      : 'center',
	backdrop       : 'dynamic',
	backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40',
	closable       : false,
	onHide         : () => {
	},
	onShow         : () => {
	},
	onToggle       : () => {
	}
}

$( document )
	.ready( function () {
		const nameElement      = $( '#name' )
		const emailElement     = $( '#email' )
		const telefonoElement  = $( '#telefono' )
		const direccionElement = $( '#direccion' )
		const formElement      = $( '#formulario5' )
		const idElement        = $( '#id-user' )

		const editModal = document.getElementById( 'edit-modal' )
		const modal     = new Modal( editModal, options )

		formElement.submit( function ( event ) {
			event.preventDefault()
			formElement.validate( {
				rules   : {
					name     : {
						required : true,
						maxlength: 50,
						minlength: 1
					},
					email    : {
						required: true
					},
					telefono : {
						required : true,
						minlength: 9,
						maxlength: 9
					},
					direccion: {
						required: true
					}
				},
				messages: {
					name     : {
						required : 'Debe ingresar un nombre.',
						maxlength: 'El nombre es demaciado largo.',
						minlength: 'El nombre es demaciado corto.'
					},
					email    : {
						required: 'Debe ingresar un email.'
					},
					telefono : {
						required : 'Debe ingresar un numero celular.',
						minlength: 'son 9 digitos.'
					},
					direccion: {
						required: 'Ingrese una direccion valido.'
					}
				}
			} )
			if ( formElement.valid() ) {
				swalWithBootstrapButtons.fire( {
					title            : 'Estas seguro?',
					text             : 'Se actualizara tu perfil con los nuevos datos',
					icon             : 'warning',
					showCancelButton : true,
					confirmButtonText: 'Si',
					cancelButtonText : 'No',
					focusConfirm     : false,
					focusCancel      : true
				} )
          .then( ( result ) => {
            if ( result.isConfirmed ) {
              const token    = document.getElementsByName(
                'csrfmiddlewaretoken' )[0]
              const formData = new FormData()
              formData.append( 'csrfmiddlewaretoken',
                token.value )
              formData.append( 'name',
                nameElement.val() )
              formData.append( 'email',
                emailElement.val() )
              formData.append( 'telefono',
                telefonoElement.val() )
              formData.append( 'direccion',
                direccionElement.val() )

              const peticion = $.ajax( {
                async      : true,
                crossDomain: true,
                // url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/usuarios/editar/' + idElement.val(),
                url        : 'http://127.0.0.1:8000/api/usuarios/editar/' + idElement.val(),
                method     : 'POST',
                data       : formData,
                processData: false,
                contentType: false
              } )

              peticion.done( function ( response ) {
                modal.show()
              } )
            }
          } )
			}
		} )
	} )
