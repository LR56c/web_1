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
		const editModal     = document.getElementById( 'edit-modal' )
		const closeModal     = document.getElementById( 'close-modal' )
		const modal = new Modal( editModal, options )

		closeModal.addEventListener( 'click', function () {
			modal.hide()
		})

		const peticionUsuarios = $.ajax( {
				async      : true,
				crossDomain: true,
				// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/usuarios',
				url        : 'http://127.0.0.1:8000/api/usuarios',
				method     : 'GET',
				processData: false,
				contentType: false
		} )

		const usuariosWarning  = $( '#usuarios-warning' )
		const usuariosList  = $( '#usuarios-list' )

		peticionUsuarios.done( function ( response ) {
			const usuariosResponse = JSON.parse( response['usuarios'] )

			if ( usuariosResponse.length === 0 ) {
				usuariosWarning.removeClass( 'hidden' )
				return
			}

			usuariosResponse.forEach( function ( usuarioObject ) {
				const item = usuarioObject
				const id   = usuarioObject['id']

				usuariosList.append( `
					<tr class="${ id % 2 === 0 ? 'border-b bg-gray-50' : 'border-b bg-white'}">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${id}</th>
						<td class="px-6 py-4">${item['nombre']}</td>
						<td class="px-6 py-4">${item['correo']}</td>
						<td class="px-6 py-4">${item['telefono']}</td>
						<td class="px-6 py-4">${item['direccion']}</td>
						<td class="px-3 py-4">
							<button type="button"
							id="${id}-button"
							class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
							Editar
							</button>
						</td>
					</tr>`)

				$(`#${id}-button`).click( function () {
					modal.show()
				})
			} )
		})
	})
