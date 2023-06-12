// inputs con warnings
const productoListBody = document.getElementById( 'producto-list' )
const productosWarning = document.getElementById( 'productos-warning' )
const productosDisponibleText = document.getElementById( 'producto-disp' )

const nombreInput     = document.getElementById( 'nombre' )
const nombreTextInput = document.getElementById( 'nombre-text' )

const porcentajeInput     = document.getElementById( 'porcentaje' )
const porcentajeTextInput = document.getElementById( 'porcentaje-text' )

const causaInput     = document.getElementById( 'causa' )
const causaTextInput = document.getElementById( 'causa-text' )

const startDateInput = document.getElementById( 'start' )
const startDateText  = document.getElementById( 'start-text' )

const startTimeInput = document.getElementById( 'time-start' )
const startTimeText  = document.getElementById( 'time-start-text' )

const endDateInput = document.getElementById( 'end' )
const endDateText  = document.getElementById( 'end-text' )

const endTimeInput = document.getElementById( 'time-end' )
const endTimeText  = document.getElementById( 'time-end-text' )

const form = document.getElementById( 'form1' )

let listaIdProductos = new Set()
let elementosChecked = new Set()
let elementosError   = new Set()

// peticion
const peticionProductos = $.ajax( {
	async      : true,
	crossDomain: true,
	// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/product',
	url        : 'http://127.0.0.1:8000/api/product',
	method     : 'GET',
	processData: false,
	contentType: false
} )

peticionProductos.done( function ( response ) {
	const productosResponse = JSON.parse( response['productos'] )

	if ( productosResponse.length === 0 ) {
		productosWarning.classList.remove( 'hidden' )
		return
	}

	productosResponse.forEach( function ( producto ) {
		const id   = producto['pk']
		const item = producto['fields']

		const tr   = document.createElement( 'tr' )
		tr.classList.add( 'bg-white', 'border-b' )

		const td = document.createElement( 'td' )
		td.classList.add( 'w-4', 'p-4' )

		const div = document.createElement( 'div' )
		div.classList.add( 'flex', 'items-center' )

		const input = document.createElement( 'input' )
		input.id    = id + '-check'
		input.type  = 'checkbox'
		input.classList.add( 'w-4', 'h-4', 'text-blue-600', 'bg-gray-100',
			'border-gray-300', 'rounded', 'focus:ring-blue-500' )

		const label   = document.createElement( 'label' )
		label.htmlFor = id + '-check'
		label.classList.add( 'sr-only' )
		label.innerText = 'checkbox'

		div.appendChild( input )
		div.appendChild( label )
		td.appendChild( div )
		tr.appendChild( td )

		const th = document.createElement( 'th' )
		th.scope = 'row'
		th.id    = id + '-nombre'
		th.classList.add( 'px-6', 'py-4', 'font-medium', 'text-gray-900',
			'whitespace-nowrap' )
		th.innerText = item['nombre']
		tr.appendChild( th )

		const tdValor = document.createElement( 'td' )
		tdValor.id    = id + '-valor'
		tdValor.classList.add( 'px-6', 'py-4' )
		tdValor.innerText = item['valor']
		tr.appendChild( tdValor )

		const tdStock = document.createElement( 'td' )
		tdStock.id    = id + '-stock'
		tdStock.classList.add( 'px-6', 'py-4' )
		tdStock.innerText = item['stock']
		tr.appendChild( tdStock )

		const tdImagen = document.createElement( 'td' )
		tdImagen.classList.add( 'px-6', 'py-4' )

		const img = document.createElement( 'img' )
		img.id    = id + '-imagen'
		img.classList.add( 'h-12', 'w-12', 'object-contain' )
		img.src = item['imagen']
		img.alt = '...'

		tdImagen.appendChild( img )
		tr.appendChild( tdImagen )
		productoListBody.append( tr )

		input.addEventListener( 'change', function () {
			if ( input.checked ) {
				elementosChecked.add( input )
				listaIdProductos.add( id )
			}
			else {
				elementosChecked.delete( input )
				listaIdProductos.delete( id )
			}
			productosDisponibleText.innerText = listaIdProductos.size
		} )
	} )
} )

// estilos de validacion
const textInvalid  = [ 'text-red-600', 'block' ]
const textValid    = [ 'hidden' ]
const inputValid   = [ 'focus:ring-green-500', 'focus:border-green-500' ]
const inputInvalid = [ 'focus:ring-red-500', 'focus:border-red-500' ]

// funciones
function checkNombre() {
	const nombre = String( nombreInput.value )
	if ( typeof nombre !== 'string' || nombre.length <= 0 ) {
		nombreTextInput.classList.add( ...textInvalid )
		nombreTextInput.classList.remove( ...textValid )
		nombreInput.classList.remove( ...inputValid )
		nombreInput.classList.add( ...inputInvalid )
		elementosError.add( nombreInput )

		return false
	}
	else {
		nombreInput.classList.add( ...inputValid )
		nombreTextInput.classList.add( ...textValid )
		nombreTextInput.classList.remove( ...textInvalid )
		nombreInput.classList.remove( ...inputInvalid )
		elementosError.delete( nombreInput )
		return true
	}
}

function checkPorcentaje() {
	const porcentaje = Number( porcentajeInput.value )
	if ( typeof porcentaje !== 'number' || isNaN( porcentaje ) || porcentaje <
		0 || porcentaje > 100 || porcentajeInput.value === '' )
	{
		porcentajeTextInput.classList.add( ...textInvalid )
		porcentajeTextInput.classList.remove( ...textValid )
		porcentajeInput.classList.remove( ...inputValid )
		porcentajeInput.classList.add( ...inputInvalid )

		elementosError.add( porcentajeInput )
		return false
	}
	else {
		porcentajeInput.classList.add( ...inputValid )
		porcentajeTextInput.classList.add( ...textValid )
		porcentajeTextInput.classList.remove( ...textInvalid )
		porcentajeInput.classList.remove( ...inputInvalid )

		elementosError.delete( porcentajeInput )
		return true
	}
}

function checkCausa() {
	const causa = String( causaInput.value )
	if ( typeof causa !== 'string' || causa.length <= 0 ) {
		causaTextInput.classList.add( ...textInvalid )
		causaTextInput.classList.remove( ...textValid )
		causaInput.classList.remove( ...inputValid )
		causaInput.classList.add( ...inputInvalid )

		elementosError.add( causaInput )
		return false
	}
	else {
		causaInput.classList.add( ...inputValid )
		causaTextInput.classList.add( ...textValid )
		causaTextInput.classList.remove( ...textInvalid )
		causaInput.classList.remove( ...inputInvalid )

		elementosError.delete( causaInput )
		return true
	}
}

function emptyStartDate() {
	if ( startDateInput.value.length === 0 ) {
		startDateText.classList.add( ...textInvalid )
		startDateText.classList.remove( ...textValid )
		startDateText.innerHTML = 'La fecha inicio no puede estar vacia'

		elementosError.add( startDateInput )
		return false
	}

	startDateText.classList.add( ...textValid )
	startDateText.classList.remove( ...textInvalid )

	elementosError.delete( startDateInput )
	return true
}

function emptyEndDate() {
	if ( endDateInput.value.length === 0 ) {
		endDateText.classList.add( ...textInvalid )
		endDateText.classList.remove( ...textValid )
		endDateText.innerHTML = 'La fecha de termino no puede estar vacia'

		elementosError.add( endDateInput )
		return false
	}

	endDateText.classList.add( ...textValid )
	endDateText.classList.remove( ...textInvalid )
	elementosError.delete( endDateInput )
	return true
}


function startDateValid() {

	if ( startDateInput.value > endDateInput.value ) {
		startDateText.classList.add( ...textInvalid )
		startDateText.classList.remove( ...textValid )
		startDateText.innerHTML =
			'La fecha inicio no puede ser posterior a la fecha de termino'

		elementosError.add( startDateInput )
		return false
	}
	startDateText.classList.add( ...textValid )
	startDateText.classList.remove( ...textInvalid )

	elementosError.delete( startDateInput )
	return true
}

function endDateValid() {

	if ( endDateInput.value < startDateInput.value ) {
		endDateText.classList.add( ...textInvalid )
		endDateText.classList.remove( ...textValid )
		endDateText.innerHTML =
			'La fecha de termino no puede ser posterior a la fecha de termino'

		elementosError.add( endDateInput )
		return false
	}
	endDateText.classList.add( ...textValid )
	endDateText.classList.remove( ...textInvalid )

	elementosError.delete( endDateInput )
	return true
}


function timeValid() {
	if ( startDateInput.value === endDateInput.value )
	{
		if ( startTimeInput.value >= endTimeInput.value ) {
			startTimeText.classList.add( ...textInvalid )
			startTimeText.classList.remove( ...textValid )
			startDateText.innerHTML =
				'La hora inicio no puede ser posterior a la hora de termino'
			elementosError.add( startTimeInput )
			return false
		}

		if ( endTimeInput.value <= startTimeInput.value ) {
			endTimeText.classList.add( ...textInvalid )
			endTimeText.classList.remove( ...textValid )
			endTimeText.innerHTML =
				'La hora termino no puede ser anterior a la hora de inicio'
			elementosError.add( endTimeInput )
			return false
		}
	}

	startTimeText.classList.add( ...textValid )
	startTimeText.classList.remove( ...textInvalid )
	endTimeText.classList.add( ...textValid )
	endTimeText.classList.remove( ...textInvalid )

	elementosError.delete( startTimeInput )
	elementosError.delete( endTimeInput )

	return true
}

function emptyStartTime() {
	if ( startTimeInput.value === '' ) {
		startTimeText.classList.add( ...textInvalid )
		startTimeText.classList.remove( ...textValid )
		startTimeText.innerHTML = 'La hora inicio no puede estar vacia'
		elementosError.add( startTimeInput )
		return false
	}

	startTimeText.classList.add( ...textValid )
	startTimeText.classList.remove( ...textInvalid )
	elementosError.delete( startTimeInput )

	return true
}

function emptyEndTime() {
	if ( endTimeInput.value === '' ) {
		endTimeText.classList.add( ...textInvalid )
		endTimeText.classList.remove( ...textValid )
		endTimeText.innerHTML = 'La hora de termino no puede estar vacia'
		elementosError.add( endTimeInput )
		return false
	}

	endTimeText.classList.add( ...textValid )
	endTimeText.classList.remove( ...textInvalid )
	elementosError.delete( endTimeInput )

	return true
}

// eventos
nombreInput.addEventListener( 'focusout', () => {
	checkNombre()
} )

porcentajeInput.addEventListener( 'focusout', () => {
	checkPorcentaje()
} )

causaInput.addEventListener( 'focusout', () => {
	checkCausa()
} )

startDateInput.addEventListener( 'focusout', () => {
	startDateValid()
	endDateValid()
} )

endDateInput.addEventListener( 'focusout', () => {
	startDateValid()
	endDateValid()
} )

startTimeInput.addEventListener( 'focusout', () => {
	timeValid()
} )

endTimeInput.addEventListener( 'focusout', () => {
	timeValid()
} )

nombreInput.addEventListener( 'input', () => {
	checkNombre()
} )

porcentajeInput.addEventListener( 'input', () => {
	checkPorcentaje()
} )

causaInput.addEventListener( 'input', () => {
	checkCausa()
} )

// form
form.addEventListener( 'submit', function ( e ) {
	e.preventDefault()

	const bNombre         = checkNombre()
	const bPorcentaje     = checkPorcentaje()
	const bCausa          = checkCausa()
	const bStartDate      = startDateValid()
	const bEndDate        = endDateValid()
	const bEmptyStartDate = emptyStartDate()
	const bEmptyEndDate   = emptyEndDate()
	const bTime           = timeValid()
	const bEmptyStartTime = emptyStartTime()
	const bEmptyEndTime   = emptyEndTime()

	for ( const item of elementosError ) {
		item.focus()
		break
	}


	if ( bNombre && bPorcentaje && bCausa && bStartDate && bEndDate && bTime &&
		bEmptyStartDate && bEmptyEndDate && bEmptyStartTime && bEmptyEndTime )
	{

		let formData = new FormData()

		const token = document.getElementsByName( 'csrfmiddlewaretoken' )[0]
		formData.append( 'csrfmiddlewaretoken', token.value )
		formData.append( 'name', nombreInput.value )
		formData.append( 'porcentaje', porcentajeInput.value )
		formData.append( 'causa', causaInput.value )
		formData.append( 'fecha_inicio',
			parseDate( startTimeInput.value, startDateInput.value ) )
		formData.append( 'fecha_fin',
			parseDate( endTimeInput.value, endDateInput.value ) )
		// formData.append( 'data', JSON.stringify(listaIdProductos) )
		const productJsonList = JSON.stringify( [ ...listaIdProductos ] )
		formData.append( 'data', productJsonList )


		const peticionProductos = $.ajax( {
			async      : true,
			crossDomain: true,
			// url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/descuento/crear',
			url        : 'http://127.0.0.1:8000/api/descuento/crear',
			method     : 'POST',
			data       : formData,
			processData: false,
			contentType: false
		} )

		peticionProductos.done( function ( response ) {
			Swal.fire({
				title: 'Exito!',
				text: 'Se ha registrado la nueva oferta',
				icon: 'success',
				confirmButtonText: 'Cerrar'
			})
		} )

		// peticionProductos.fail( function (response) {} )

		form.reset()
	}
} )

function parseDate( time, date ) {
	const partesFecha = date.split( '/' )
	const mes         = parseInt( partesFecha[0] ) - 1
	const dia         = parseInt( partesFecha[1] )
	const anio        = parseInt( partesFecha[2], 10 )

	const partesHora = time.split( ':' )
	const horas      = parseInt( partesHora[0], 10 )
	const minutos    = parseInt( partesHora[1], 10 )

	const fechaHora = new Date( anio, mes, dia, horas, minutos )


	if ( isNaN( fechaHora.getTime() ) ) {
		return null
	}
	else {
		// return `${ dia }/${ mes + 1 }/${ anio } ${ horas }:${ minutos }`
		return `${ dia },${ mes + 1 },${ anio },${ horas },${ minutos }`
		// return fechaHora
	}
}
