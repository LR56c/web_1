$( document )
	.ready( function () {

		let nombre = $( '#nombre' )
		let precio = $( '#precio' )
		let form   = $( '#form4' )

		form.submit( function ( e ) {
			e.preventDefault()

			if (!form.valid()) return

			form.validate( {
				rules   : {
					nombre: {
						required: true

					},
					precio: {
						required: true

					}
				},
				messages: {
					nombre: {
						required: 'Debe ingresar un nombre'

					},
					precio: {
						required: 'Debe ingresar un precio valido.'
					}
				}
			} )

			const file = $( '#imagen' )

			let formData = new FormData( this )

			formData.append( 'file', file.val() )

			const peticionProductos = $.ajax( {
					async      : true,
					crossDomain: true,
					url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product/crear',
					method     : 'POST',
					data       : JSON.stringify( formData ),
				}
			)
			peticionProductos.done( function ( response ) {
				console.log( 'response' )
				console.log( response )
			} )
		} )
	} )
