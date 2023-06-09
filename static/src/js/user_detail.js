const inputsId = document.getElementsByName( 'tarjeta_id' )

for ( let input of inputsId ) {
	const id         = input.value
	const imgElement = document.getElementById( `${ id }-img` )
	const numElement = document.getElementById( `${ id }-num` )
	const num        = getCardType( numElement.value )

	if ( num === 'visa' ) {
		imgElement.src = '/static/tarj/visa.png'
	}
	else if ( num === 'mastercard' ) {
		imgElement.src = '/static/tarj/mastercard.jpg'
	}
}

function getCardType( num ) {
	let re = new RegExp( `^4` )

	if ( re.test( num ) ) {
		return 'visa'
	}

	re = new RegExp( `^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)` )
	if ( re.test( num ) ) {
		return 'mastercard'
	}

	return 'visa'
}
