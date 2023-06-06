const options    = {
	placement      : 'center',
	backdrop       : 'dynamic',
	backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40',
	closable       : true,
	onHide         : () => {
	},
	onShow         : () => {
	},
	onToggle       : () => {
	}
}
const editModal  = document.getElementById( 'edit-modal' )
const modal      = new Modal( editModal, options )

function closeModal( ) {
	modal.hide()
}

function openModal( ) {
	modal.show()
}
