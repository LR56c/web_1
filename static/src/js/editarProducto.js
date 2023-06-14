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

let lastSelectedOferta = 0
let selectionNull
let selectionTR

$( document )
	.ready( function () {
		const editModal   = document.getElementById( 'edit-modal' )
		const submitModal = document.getElementById( 'submit-modal' )
		const modal       = new Modal( editModal, options )

		// submitModal.addEventListener( 'click', function () {} )

		$( '#descripcion' )
			.text( descArea )

		const idProducto = Number( idProd )
		const ofertaId   = Number( idOferta )
		lastSelectedOferta = ofertaId

		selectionNull = $( '#selected-null' )
		selectionTR   = $( '#selected-tr' )

		let imagenPreview     = $( '#imagen-preview' )
		let imagenTextPreview = $( '#imagen-text-preview' )
		let inputFile         = $( '#imagen' )

		if ( !isNaN(ofertaId) ) {
			selectionNull.addClass( 'hidden' )
			selectionTR.removeClass( 'hidden' )
			selectionTR.addClass( [ 'flex', 'flex-row' ] )

			lastSelectedOferta = ofertaId
			$( `#selected-name` ).text( $( `#${ofertaId}-name` ).text() )
			$( `#selected-porc` ).text( $( `#${ofertaId}-porc` ).text() )
			$( `#selected-fi` ).text( $( `#${ofertaId}-fi` ).text() )
			$( `#selected-fe` ).text( $( `#${ofertaId}-fe` ).text() )
		}

		inputFile.change( function ( e ) {

			const file = e.target.files[0]
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

			if ( !form.valid() ) {
				return
			}

			const ofertaInput = lastSelectedOferta === 0 ? '' : String(
				lastSelectedOferta )

			let formData            = new FormData( this )
			const imagenCurrentName = formData.get( 'imagen' ).name
			const imageNameData     = imagenCurrentName === undefined
				? ''
				: imagenCurrentName
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

			// peticionProductos.fail( function ( response ) {} )

			peticionProductos.done( function ( response ) {
				modal.show()
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
