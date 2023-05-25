$( document )
	.ready( function () {
		let firstPreview = true

		let preImagen  = $( '#pre-imagen' )
		let postImagen = $( '#post-imagen' )

		let imagenPreview     = $( '#imagen-preview' )
		let imagenTextPreview = $( '#imagen-text-preview' )
		let inputFile         = $( '#imagen' )
		let imagenWarning     = $( '#imagen-warning' )

		inputFile.change( function ( e ) {
			if ( firstPreview ) {
				preImagen.hide()
				postImagen.show()
			}

			imagenWarning.hide()
			firstPreview = false
			const file   = e.target.files[0]
			imagenPreview.attr( 'src', URL.createObjectURL( file ) )
			imagenTextPreview.text( file.name )
		} )

		let nombre = $( '#nombre' )
		let precio = $( '#precio' )
		let form   = $( '#form4' )

		form.submit( function ( e ) {
			e.preventDefault()

			form.validate( {
				rules   : {
					nombre: {
						required: true

					},
					valor : {
						required: true
					}
				},
				messages: {
					nombre: {
						required: 'Debe ingresar un nombre'

					},
					valor : {
						required: 'Debe ingresar un precio valido.'
					}
				}
			} )


			if ( !form.valid() && firstPreview ) {
				imagenWarning.show()
				return
			}

			let formData = new FormData( this )
			const imageName = formData.get( 'imagen' ).name
			formData.append( 'imageName', imageName )

			const peticionProductos = $.ajax( {
					async      : true,
					crossDomain: true,
					url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product/crear',
					// url        : 'http://127.0.0.1:8000/api/product/crear',
					method     : 'POST',
					data       : formData,
					processData: false,
					contentType: false
				}
			)
			peticionProductos.done( function ( response ) {
				if ( response.success ){
					Swal.fire({
						title: 'Exito!',
						text: 'Se ha registrado el nuevo producto',
						icon: 'success',
						confirmButtonText: 'Cerrar'
					})
				}
			} )
		} )
	} )
