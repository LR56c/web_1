
$(document).ready(function (){

    let email = $("#emailc");
    let password = $("#password1");
    let form = $("#formulario2");

    $("#guardar1").click(function (){
        form.validate({
            rules:{
                username:{
                    required: true,
                    maxlength: 50,
                    minlength: 10
                },
                password:{
                    required: true
                }
            },
            messages:{
                username:{
                    required: "Debe ingresar un correo electronico",
                    maxlength: "El correo es demaciado largo",
                    minlength: "El correo es demaciado corto"
                },
                password:{
                    required: "Debe ingresar una contraseña"
                }
            }
        })



    })

})
