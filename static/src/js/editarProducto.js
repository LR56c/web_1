$( document )
	.ready( function () {
		const idEsc      = $( '#p-id' )
		const nombreEsc      = $( '#nombre-esc' )
		const descripcionEsc = $( '#descripcion-esc' )
		const valorEsc       = $( '#valor-esc' )
		const stockEsc       = $( '#stock-esc' )
		const imagenEsc      = $( '#imagen-esc' )
		const imageNameEsc   = $( '#imageName-esc' )
		const ofertaEsc      = $( '#oferta-esc' )

		const idProducto	= Number( idEsc.val() )
		const nombre      = $( '#nombre' )
		const descripcion = $( '#descripcion' )
		const valor       = $( '#valor' )
		const stock       = $( '#stock' )
		const imagen      = String(imagenEsc.val())
		const imageName   = String(imageNameEsc.val())
		const ofertaId    = Number( ofertaEsc.val() )

		let postImagen = $( '#post-imagen' )

		let imagenPreview     = $( '#imagen-preview' )
		let imagenTextPreview = $( '#imagen-text-preview' )
		let inputFile         = $( '#imagen' )
		let oferta            = $( '#oferta-list' )
		let ofertaWarning     = $( '#oferta-warning' )

		let lastSelectedOferta = 0

		let selectionNull = $( '#selected-null' )
		let selectionTR   = $( '#selected-tr' )

		nombre.val( nombreEsc.val() )
		descripcion.text( descripcionEsc.val() )
		valor.val( valorEsc.val() )
		stock.val( stockEsc.val() )

		imagenPreview.attr( 'src', imagen )
		imagenTextPreview.text( imageName )

		const peticionOfertas = $.ajax( {
				async      : true,
				crossDomain: true,
				// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/descuentos',
				url        : 'http://127.0.0.1:8000/api/descuentos',
				method     : 'GET',
				processData: false,
				contentType: false
			}
		)

		peticionOfertas.done( function ( response ) {
			const ofertasResponse = JSON.parse( response['ofertas'] )
			if ( ofertasResponse.length === 0 ) {
				ofertaWarning.removeClass( 'hidden' )
				return
			}
			ofertasResponse.forEach( function ( item ) {
				const id = item['id']

				oferta.append( `
				<tr class="${ id % 2 === 0
					? 'border-b bg-gray-50'
					: 'border-b bg-white' }">
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input id="${ id }-check" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
							<label for="${ id }-check" class="sr-only">checkbox</label>
						</div>
					</td>
					<td id="${ id }-name" class="px-6 py-4">${ item['name'] }</td>
					<td id="${ id }-porc" class="px-6 py-4 line-clamp-1">${ item['porcentaje'] }%</td>
					<td id="${ id }-fi" class="px-6 py-4">${ item['fecha_inicio'] }</td>
					<td id="${ id }-fe" class="px-6 py-4">${ item['fecha_fin'] }</td>
				</tr>` )

				$( `#${ id }-check` )
					.change( function ( e ) {
						if ( id !== lastSelectedOferta ) {
							$( `#${ lastSelectedOferta }-check` )
								.prop( 'checked', false )
							$( `#${ id }-check` )
								.prop( 'checked', true )
							lastSelectedOferta = id
							selectionNull.addClass( 'hidden' )
							selectionTR.removeClass( 'hidden' )
							selectionTR.addClass( [ 'flex', 'flex-row' ] )
							$( `#selected-name` )
								.text( `${ item['name'] }` )
							$( `#selected-porc` )
								.text( `${ item['porcentaje'] }` )
							$( `#selected-fi` )
								.text( `${ item['fecha_inicio'] }` )
							$( `#selected-fe` )
								.text( `${ item['fecha_fin'] }` )
						}
						else {
							$( `#${ lastSelectedOferta }-check` )
								.prop( 'checked', false )
							lastSelectedOferta = 0
							selectionNull.removeClass( 'hidden' )
							selectionTR.addClass( 'hidden' )
							selectionTR.removeClass( [ 'flex', 'flex-row' ] )
						}
					} )
			} )


			if ( !isNaN(ofertaId) ) {

				lastSelectedOferta = ofertaId
				$( `#${ ofertaId }-check` ).prop( 'checked', true )
				lastSelectedOferta = ofertaId
				selectionNull.addClass( 'hidden' )
				selectionTR.removeClass( 'hidden' )
				selectionTR.addClass( [ 'flex', 'flex-row' ] )
				$( `#selected-name` ).text( $( `#${ofertaId}-name` ).text() )
				$( `#selected-porc` ).text( $( `#${ofertaId}-porc` ).text() )
				$( `#selected-fi` ).text( $( `#${ofertaId}-fi` ).text() )
				$( `#selected-fe` ).text( $( `#${ofertaId}-fe` ).text() )
			}
		} )

		inputFile.change( function ( e ) {

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

			if ( !form.valid()) return

			const ofertaInput = lastSelectedOferta === 0 ? '' : String(
				lastSelectedOferta )

			let formData    = new FormData( this )
			const imagenCurrentName = formData.get( 'imagen' ).name
			const imageNameData = imagenCurrentName === '' ? imageName : imagenCurrentName
			formData.append( 'imageName', imageNameData )
			formData.append( 'oferta', ofertaInput )

			const peticionProductos = $.ajax( {
					async      : true,
					crossDomain: true,
					// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product/editar/' + idProducto,
					url        : 'http://127.0.0.1:8000/api/product/editar/' + idProducto,
					method     : 'POST',
					data       : formData,
					processData: false,
					contentType: false
				}
			)

			peticionProductos.fail( function ( response ) {
				console.log( 'fallo' )
			})
			peticionProductos.done( function ( response ) {
				// TODO: hacer aparecer modal exito y obligar boton ir a productos
				// if ( response.success ) {
				// 	form.trigger( 'reset' )
				// 	firstPreview = true
				// 	preImagen.show()
				// 	postImagen.hide()
				// }
			} )
		} )
	} )
