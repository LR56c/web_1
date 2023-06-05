const productsList = document.getElementById( 'products-list' )
const totalCompra = document.getElementById( 'total-compra' )

const fetchCarrito = async () => {
	const response = await fetch( 'http://127.0.0.1:8000/api/carrito', {
		method: 'GET',
	} )

	const data     = await response
	if ( data.ok ) {
		const dataJson   = await response.json()
		const montoTotal = dataJson['montoTotal']
		const productos  = JSON.parse( dataJson['carrito'] )

		totalCompra.textContent = montoTotal

		for ( const producto of productos ) {

			const div = document.createElement( 'div' )
			div.classList.add( 'relative', 'flex', 'flex-col', 'justify-center',
				'items-center', 'gap-2', 'w-4/5', 'xs:max-w-sm', 'p-4', 'bg-white',
				'border', 'border-gray-200', 'rounded-lg', 'shadow' )

			const imgDiv = document.createElement( 'div' )
			imgDiv.classList.add( 'flex', 'w-full', 'flex-col', 'xxs:flex-row',
				'justify-center', 'items-center' )

			const img = document.createElement( 'img' )
			img.src   = producto['imagen']
			img.classList.add( 'h-20', 'w-20', 'bg-gray-700', 'basis-1/2',
				'object-contain', 'rounded-lg' )
			img.alt = '...'

			const nameDiv = document.createElement( 'div' )
			nameDiv.classList.add( 'flex', 'w-full', 'basis-1/2', 'justify-center',
				'items-center' )
			nameDiv.textContent = producto['nombre']

			imgDiv.appendChild( img )
			imgDiv.appendChild( nameDiv )

			const priceDiv = document.createElement( 'div' )
			priceDiv.classList.add( 'flex', 'w-full', 'xxs:flex-row', 'flex-col',
				'justify-center', 'items-center' )

			if(producto['descuento'] === '0') {
				const priceInnerDiv = document.createElement( 'div' )
				priceInnerDiv.classList.add( 'text-black', 'text-2xl', 'font-bold')
				priceInnerDiv.textContent = producto['precio']

				priceDiv.appendChild( priceInnerDiv )
			}
			else {
				const priceInnerDiv = document.createElement( 'div' )
				priceInnerDiv.classList.add( 'w-full', 'h-full', 'flex', 'flex-col',
					'items-center' )

				const originalPrice = document.createElement( 'div' )
				originalPrice.classList.add( 'text-gray-400', 'line-through' )
				originalPrice.textContent = producto['precio']

				const priceDiscountDiv = document.createElement( 'div' )
				priceDiscountDiv.classList.add( 'flex', 'items-center', 'flex-col',
					'gap-2' )

				const salePrice = document.createElement( 'div' )
				salePrice.classList.add( 'text-red-600', 'text-2xl', 'font-bold' )
				salePrice.textContent = producto['rebaja']

				const discountBadge = document.createElement( 'div' )
				discountBadge.classList.add( 'text-red-600', 'text-xs', 'xs:text-sm',
					'rounded-full', 'bg-red-100' )
				discountBadge.textContent = `-${producto['descuento']}% descuento`

				priceDiscountDiv.appendChild( salePrice )
				priceDiscountDiv.appendChild( discountBadge )

				priceInnerDiv.appendChild( originalPrice )
				priceInnerDiv.appendChild( priceDiscountDiv )

				priceDiv.appendChild( priceInnerDiv )
			}

			const quantityDiv = document.createElement( 'div' )
			quantityDiv.classList.add( 'w-full', 'h-full', 'flex', 'flex-col',
				'justify-center', 'items-center' )

			const quantityLabel = document.createElement( 'p' )
			quantityLabel.classList.add( 'font-bold', 'my-2' )
			quantityLabel.textContent = 'Cantidad'

			const quantityInnerDiv = document.createElement( 'div' )
			quantityInnerDiv.classList.add( 'w-full', 'flex', 'xxs:flex-row',
				'flex-col', 'justify-center', 'items-center', 'gap-4' )

			const quantityInputDiv = document.createElement( 'div' )
			quantityInputDiv.classList.add( 'h-10', 'border-2', 'rounded-full',
				'flex',
				'justify-center', 'items-center' )

			const quantityInputInnerDiv = document.createElement( 'div' )
			quantityInputInnerDiv.classList.add( 'flex', 'gap-2', 'px-2' )

			const quantityText = document.createElement( 'p' )
			quantityText.classList.add( 'mx-2' )
			quantityText.textContent = producto['cantidad']

			quantityInputInnerDiv.appendChild( quantityText )

			quantityInputDiv.appendChild( quantityInputInnerDiv )
			quantityInnerDiv.appendChild( quantityInputDiv )

			quantityDiv.appendChild( quantityLabel )
			quantityDiv.appendChild( quantityInnerDiv )
			// importante
			priceDiv.appendChild( quantityDiv )

			const button = document.createElement( 'button' )
			button.classList.add( 'absolute', 'right-2', 'top-2' )
			button.textContent = 'delete'
			button.addEventListener( 'click', async () => {
			})

			div.appendChild( imgDiv )
			div.appendChild( priceDiv )
			div.appendChild( button )
			productsList.append( div )
		}
	}

}
fetchCarrito()
