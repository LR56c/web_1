

$(document).ready(function (){

    let email = $("#emailc");
    let password = $("#password1");  
    let form = $("#formulario2");

    $("#guardar1").click(function (){

        form.validate({
            rules:{
                email:{
                    requiered: true,
                    maxlength: 50,
                    minlength: 10
                },
                password:{
                    requiered: true  
                }
            },
            messages:{
                email:{
                    requiered: "Debe ingresar son correo electronico",
                    maxlength: "El correo es demaciado largo",
                    minlength: "El correo es demaciado corto"
                },
                pasword:{
                    requiered: "Debe ingresar una contraseña"
                }
            }
        })
        
    })

})