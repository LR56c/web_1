// let nombre = $("#nombre");
// nombre.on("input", function (event) {
//     console.log(`Me llego ${nombre.val()}`)
// });

// let apellido = $("#apellido");
// apellido.on("input", function (event) {
//     console.log(`Me llego ${apellido.val()}`)
// });

// let banco = $("#banco");
// banco.on("input", function (event) {
//     console.log(`Me llego ${banco.val()}`)
// });

// let ntarjeta = $("#ntarjeta");
// ntarjeta.on("input", function (event) {
//     console.log(`Me llego ${ntarjeta.val()}`)
// });

// let mes = $("#mes");
// mes.on("input", function (event) {
//     console.log(`Me llego ${mes.val()}`)
// });

// let ano = $("#ano");
// ano.on("input", function (event) {
//     console.log(`Me llego ${ano.val()}`)
// });

// let clavei = $("#clavei");
// clavei.on("input", function (event) {
//     console.log(`Me llego ${clavei.val()}`)
// });


$(document).ready(function () {
    let nombre = $("#nombre");
    let apellido = $("#apellido");
    let banco = $("#banco");
    let tarjeta = $("#tarjeta");
    let mes = $("#mes");
    let ano = $("#ano");
    let clave = $("#clave");

    $("#formulario1").validate({

        rules: {
            nombre: { required: true,minlength: 1, maxlength: 50 },

            apellido: { required: true, minlength: 1, maxlength: 50 },

            banco:{required: true, minlength: 1, maxlength: 50},
            
            tarjeta: { required: true, minlength: 8, maxlength: 8},

            mes: { required: true, number:true, min:1, max: 12},

            ano: { required: true, minlength: 2, maxlength:2},

            clave: { required: true, minlength: 10, maxlength: 10}

        },
        messages:
        {
            nombre: "Ingrese una  nombre valido.",
            apellido: "Ingrese una apellido valido.",
            banco:"Ingresa un banco pailon.",
            tarjeta: "La tarjeta debe de llevar 8 digitos.",
            mes: "Solo numeros del 01 al 12.",
            ano: "Solo los dos ultimos digitos del año.",
            clave: "La clave es de 10 digitos!."
        }


    })

    $("#guardar1").click(function () {
        if ($("#formulario1").valid() == false) {

            Swal.fire({
                title: 'Error!',
                text: 'Vuelve a internarlo',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
            return;
        }
    })
})