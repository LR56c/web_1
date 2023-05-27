$(document).ready(function (){

    let password11 = $("#password1");
    let password22 = $("#password2");
    let form = $("#formulario3");


    $("#guardarC").click(function (){

        form.validate({
            rules:{
                password1:{
                    required: true,
                    minlength: 8


                },
                password2:{
                    required: true,
                    minlength: 8
                }
            },
            messages:{
                password1:{
                    required: "Debe ingresar una contraseña",
                    minlength: "La contraseña debe ser de 8 caracteres o más."

                },
                password2:{
                    required: "Debe ingresar la nueva contraseña",
                    minlength: "La contraseña debe ser de 8 caracteres o más."
                }
            }
        })

    })

})
