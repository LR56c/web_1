const swalWithBootstrapButtons = Swal.mixin( {
	customClass   : {
		confirmButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
		cancelButton : 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
	},
	buttonsStyling: false
} )


const buttonDelete = document.getElementsByName( 'delete-button' )
const filtroValor	= document.getElementById( 'filtro-valor' )

let idSelected = 0
for ( const buttonDeleteElement of buttonDelete ) {
	buttonDeleteElement.addEventListener( 'click', function () {
		if ( idSelected === 0 ) {
			return
		}
		swalWithBootstrapButtons.fire( {
			title            : 'Estas seguro?',
			text             : 'Se eliminara este producto',
			icon             : 'warning',
			showCancelButton : true,
			confirmButtonText: 'Si',
			cancelButtonText : 'No',
			focusConfirm     : false,
			focusCancel      : true
		} )
      .then( ( result ) => {
        if ( result.isConfirmed ) {
          const formContent = document.getElementById(
            `form-${ idSelected }` )
          const token       = formContent.querySelector(
            'input[name="csrfmiddlewaretoken"]' )
          const formData    = new FormData()
          formData.append( 'csrfmiddlewaretoken',
            token.value )

          const peticion = $.ajax( {
            async      : true,
            crossDomain: true,
            // url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/administracion/producto/eliminar/' + idSelected,
            url        : 'http://127.0.0.1:8000/administracion/producto/eliminar/' +
              idSelected,
            method     : 'POST',
            data       : formData,
            processData: false,
            contentType: false
          } )

          peticion.done( function ( response ) {
            window.location.reload()
          } )
        }
      } )
	} )

}

function tt( element, id ) {
	idSelected = id
}

let precioOrder = 'asc'
function precioClick(  ) {
	if ( precioOrder === 'asc' ) {
		precioOrder = 'desc'
	} else {
		precioOrder = 'asc'
	}
	filtroValor.value = precioOrder === 'asc' ? 'valor' : '-valor'
}
