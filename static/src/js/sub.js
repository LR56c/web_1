const buttonEnable = [
	'ml-6',
	'text-white',
	'bg-gradient-to-r',
	'from-cyan-500',
	'to-blue-500',
	'hover:bg-gradient-to-bl',
	'focus:ring-4',
	'focus:outline-none',
	'focus:ring-blue-300',
	'font-medium',
	'rounded-lg',
	'text-sm',
	'px-5',
	'py-2.5',
	'text-center'
]

const buttonDisable = [
	'text-white',
	'bg-blue-400',
	'dark:bg-blue-500',
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

payButton.addEventListener('click', () => {

})

let firstTime = true

function tt( element, id ) {
	if ( firstTime ) {
		firstTime = false
		payButton.classList.remove( ...buttonDisable )
		payButton.classList.add( ...buttonEnable )
	}
	const tarjet = document.getElementById( `${id}-button` )
	selectedTarjet.innerText = tarjet.innerText
	numInput.value = `${id}`
}
