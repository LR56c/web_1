// $( document )
// 	.ready( function () {
// 		const peticionProductos = $.ajax( {
// 				async      : true,
// 				crossDomain: true,
// 				// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product',
// 				url        : 'http://127.0.0.1:8000/api/product',
// 				method     : 'GET',
// 				processData: false,
// 				contentType: false
// 			}
// 		)
// 		const productosWarning  = $( '#productos-warning' )
// 		const productosList  = $( '#productos-list' )
//
// 		peticionProductos.done( function ( response ) {
// 			const productosResponse = JSON.parse( response['productos'] )
//
// 			if ( productosResponse.length === 0 ) {
// 				productosWarning.removeClass( 'hidden' )
// 				return
// 			}
//
// 			productosResponse.forEach( function ( productoObject ) {
// 				const id   = productoObject['pk']
// 				const item = productoObject['fields']
//
// 				productosList.append( `
// 							<tr class="${ id % 2 === 0 ? 'border-b bg-gray-50' : 'border-b bg-white'}">
// 								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${id}</th>
// 								<td class="px-6 py-4" id="${id}-nombre">${item['nombre']}</td>
// 								<td class="px-6 py-4" id="${id}-valor">$${item['valor']}</td>
// 								<td class="px-6 py-4" id="${id}-stock">${item['stock']}</td>
// 								<td class="px-6 py-4">
// 									<img id="${id}-imagen"
// 									src="${item['imagen']}"
// 									class="h-12 w-12 object-contain"
// 									alt="..."/>
// 								</td>
// 								<td class="px-3 py-4">
// 									<button type="button"
// 									id="${id}-button"
// 									class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
// 									<a href="${url}">Editar</a>
// 									</button>
// 								</td>
// 							</tr>`)
// 			} )
// 		})
// 	})
