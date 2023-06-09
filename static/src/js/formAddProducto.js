let lastSelectedOferta = 0
let selectionNull
let selectionTR

$( document )
	.ready( function () {
		let firstPreview = true

		let preImagen  = $( '#pre-imagen' )
		let postImagen = $( '#post-imagen' )

		let imagenPreview     = $( '#imagen-preview' )
		let imagenTextPreview = $( '#imagen-text-preview' )
		let inputFile         = $( '#imagen' )
		let imagenWarning     = $( '#imagen-warning' )
		let oferta            = $( '#oferta-list' )
		let ofertaWarning     = $( '#oferta-warning' )

		selectionNull = $( '#selected-null' )
		selectionTR   = $( '#selected-tr' )

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

		let form = $( '#form4' )

		form.submit( function ( e ) {
			e.preventDefault()

			form.validate( {
				rules   : {
					nombre     : {
						required: true
					},
					valor      : {
						required: true
					},
					stock      : {
						required: true
					},
					descripcion: {
						required: true
					}
				},
				messages: {
					nombre     : {
						required: 'Debe ingresar un nombre'
					},
					valor      : {
						required: 'Debe ingresar un precio valido.'
					},
					stock      : {
						required: 'Debe ingresar un stock valido.'
					},
					descripcion: {
						required: 'Debe ingresar una descripcion.'
					}
				}
			} )


			if ( !form.valid() && firstPreview ) {
				imagenWarning.show()
				return
			}

			const ofertaInput = lastSelectedOferta === 0 ? '' : String(
				lastSelectedOferta )

			let formData    = new FormData( this )
			const imageName = formData.get( 'imagen' ).name
			formData.append( 'imageName', imageName )
			formData.append( 'oferta', ofertaInput )

			const peticionProductos = $.ajax( {
					async      : true,
					crossDomain: true,
					// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product/crear',
					url        : 'http://127.0.0.1:8000/api/product/crear',
					method     : 'POST',
					data       : formData,
					processData: false,
					contentType: false
				}
			)
			peticionProductos.done( function ( response ) {
				if ( response.success ) {
					form.trigger( 'reset' )
					firstPreview = true
					preImagen.show()
					postImagen.hide()

					selectionNull.removeClass( 'hidden' )
					selectionTR.addClass( 'hidden' )
					selectionTR.removeClass( [ 'flex', 'flex-row' ] )

					Swal.fire( {
						title            : 'Exito!',
						text             : 'Se ha registrado el nuevo producto',
						icon             : 'success',
						confirmButtonText: 'Cerrar'
					} )
				}
			} )
		} )
	} )


function tt( e, id ) {
	if ( id !== lastSelectedOferta ) {
		const prevCheck			= $( `#${lastSelectedOferta}-check` )
		prevCheck.prop( 'checked', false )

		lastSelectedOferta = id

		$( `#selected-name` ).text( $( `#${lastSelectedOferta}-name` ).text() )
		$( `#selected-porc` ).text( $( `#${lastSelectedOferta}-porc` ).text() )
		$( `#selected-fi` ).text( $( `#${lastSelectedOferta}-fi` ).text() )
		$( `#selected-fe` ).text( $( `#${lastSelectedOferta}-fe` ).text() )

		selectionNull.addClass( 'hidden' )
		selectionTR.removeClass( 'hidden' )
		selectionTR.addClass( [ 'flex', 'flex-row' ] )
	}
	else {
		lastSelectedOferta = 0
		selectionNull.removeClass( 'hidden' )
		selectionTR.addClass( 'hidden' )
		selectionTR.removeClass( [ 'flex', 'flex-row' ] )
	}
}
