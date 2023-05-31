const options = {
	placement: 'center',
	backdrop: 'dynamic',
	backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40',
	closable: true,
	onHide: () => {
	},
	onShow: () => {
	},
	onToggle: () => {
	}
}

$( document )
	.ready( function () {
		let descuentosList = $( '#descuentos-list' )
		let ofertaWarning  = $( '#descuentos-warning' )
		const editModal     = document.getElementById( 'edit-modal' )
		const closeModal     = document.getElementById( 'close-modal' )
		const modal = new Modal( editModal, options )

		closeModal.addEventListener( 'click', function () {
			modal.hide()
		})

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
				const id   = item['id']

				descuentosList.append( `
					<tr class="${ id % 2 === 0 ? 'border-b bg-gray-50' : 'border-b bg-white'}">
						<th id="${id}-id" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${id}</th>
						<td id="${id}-name" class="px-6 py-4">${item['name']}</td>
						<td id="${id}-porc" class="px-6 py-4">${item['porcentaje']}</td>
						<td id="${id}-causa" class="px-6 py-4">${item['causa']}</td>
						<td id="${id}-fi" class="px-6 py-4">${item['fecha_inicio']}</td>
						<td id="${id}-fe" class="px-6 py-4">${item['fecha_fin']}</td>
						<td class="px-3 py-4">
							<button id="${id}-button"
							 type="button" 
							 class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
							 >
								Editar
							</button>
						</td>
					</tr>` )

				$(`#${id}-button`).click( function () {
					modal.show()
				})
			} )
		} )

	} )
