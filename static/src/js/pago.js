const enabledString = "w-2/3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
const buttonEnable = enabledString.split(' ')
const buttonDisable = [
	'text-white',
	'bg-red-400',
	'dark:bg-red-500',
	'cursor-not-allowed',
	'font-medium',
	'rounded-lg',
	'text-sm',
	'px-5',
	'py-2.5',
	'text-center'
]

const selectedTarjet = document.getElementById('selected-tarjeta')
const payButton = document.getElementById('pay-button')
const numInput = document.getElementById('num-input')

let firstTime = true

function tt( element, id ) {
	if ( firstTime ) {
		firstTime = false
		payButton.classList.remove( ...buttonDisable )
		payButton.classList.add( ...buttonEnable )
		payButton.removeAttribute('disabled')
	}
	const tarjet = document.getElementById( `${id}-button` )
	selectedTarjet.innerText = tarjet.innerText
	numInput.value = `${id}`
}
