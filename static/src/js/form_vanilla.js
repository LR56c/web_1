// inputs con warnings
const nombreInput = document.getElementById("nombre");
const nombreTextInput = document.getElementById("nombre-text");

const porcentajeInput = document.getElementById("porcentaje");
const porcentajeTextInput = document.getElementById("porcentaje-text");

const causaInput = document.getElementById("causa");
const causaTextInput = document.getElementById("causa-text");

const form = document.getElementById("form1");

// estilos de validacion
const textInvalid = ["text-red-600", "block"]
const textValid = ["hidden"]
const inputValid = ["focus:ring-green-500", "focus:border-green-500"]
const inputInvalid = ["focus:ring-red-500", "focus:border-red-500"]

// funciones


function checkNombre() {
    const nombre = String(nombreInput.value)
    if (typeof nombre !== "string" || nombre.length <= 0) {
        nombreTextInput.classList.add(...textInvalid);
        nombreTextInput.classList.remove(...textValid);
        nombreInput.classList.remove(...inputValid)
        nombreInput.classList.add(...inputInvalid)
        return false;
    } else {
        nombreInput.classList.add(...inputValid)
        nombreTextInput.classList.add(...textValid);
        nombreTextInput.classList.remove(...textInvalid);
        nombreInput.classList.remove(...inputInvalid)
        return true;
    }
}

function checkPorcentaje() {
    const porcentaje = Number(porcentajeInput.value);
    if (typeof porcentaje !== "number" || isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        porcentajeTextInput.classList.add(...textInvalid);
        porcentajeTextInput.classList.remove(...textValid);
        porcentajeInput.classList.remove(...inputValid)
        porcentajeInput.classList.add(...inputInvalid)
        return false;
    } else {
        porcentajeInput.classList.add(...inputValid)
        porcentajeTextInput.classList.add(...textValid);
        porcentajeTextInput.classList.remove(...textInvalid);
        porcentajeInput.classList.remove(...inputInvalid)
        return true;
    }
}

function checkCausa() {
    const causa = String(causaInput.value)
    if (typeof causa !== "string" || causa.length <= 0) {
        causaTextInput.classList.add(...textInvalid);
        causaTextInput.classList.remove(...textValid);
        causaInput.classList.remove(...inputValid)
        causaInput.classList.add(...inputInvalid)
        return false;
    } else {
        causaInput.classList.add(...inputValid)
        causaTextInput.classList.add(...textValid);
        causaTextInput.classList.remove(...textInvalid);
        causaInput.classList.remove(...inputInvalid)
        return true;
    }
}

// eventos


nombreInput.addEventListener("focusout", () => {
    checkNombre()
})

porcentajeInput.addEventListener("focusout", () => {
    checkPorcentaje()
})

causaInput.addEventListener("focusout", () => {
    checkCausa()
})


nombreInput.addEventListener("input", () => {
    checkNombre()
})

porcentajeInput.addEventListener("input", () => {
    checkPorcentaje()
})

causaInput.addEventListener("input", () => {
    checkCausa()
})

// form
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const bNombre = checkNombre();
    const bPorcentaje = checkPorcentaje();
    const bCausa = checkCausa();

    if (bNombre && bPorcentaje && bCausa) {

        let formData = new FormData()

        const token = document.getElementsByName('csrfmiddlewaretoken')[0]
        formData.append('name', nombreInput.value)
        formData.append('porcentaje', porcentajeInput.value)
        formData.append('causa', causaInput.value)
        formData.append('csrfmiddlewaretoken',token.value)



        const peticionProductos = $.ajax({
            async: true,
            crossDomain: true,
            // url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/descuento/crear',
            url: 'http://127.0.0.1:8000/api/descuento/crear',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false
        })

        peticionProductos.done(function (response) {
            if (response.success) {
                Swal.fire({
                    title: 'Exito!',
                    text: 'Se ha registrado el descuento',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                })
            }
        })

         peticionProductos.fail(function (response) {

             console.log(response.errors)
             nombreTextInput.innerHTML = 'fallos'


         })

        form.reset()
    }
})
