// *********************************************************************************************************
// *********************************************************************************************************
//                                            BASE DE DATOS
// *********************************************************************************************************
// *********************************************************************************************************

let main = document.createElement("main");
let div_main_inputs = document.createElement("div");

document.body.append(main);
main.append(div_main_inputs);

div_main_inputs.innerHTML = "<input id='registrar_correo' placeholder='Ingrese su correo'> <input type='password' id='registrar_password' placeholder='Ingrese una contraseña'> <input type='password' id='registrar_password_repeat' placeholder='Repita su contraseña'> <button id='boton_registrar'>Registrarse</button> <button id='boton_regresar'>Regresar</button>";

//REGISTRAR INPUTS
let registrar_correo = document.getElementById("registrar_correo");
let registrar_password = document.getElementById("registrar_password");
let registrar_password_repeat = document.getElementById("registrar_password_repeat");

//BOTONES
let boton_registrar = document.getElementById("boton_registrar");
let boton_regresar = document.getElementById("boton_regresar")

//FUNCION BOTON REGRESAR
boton_regresar.addEventListener("click", regresar);

function regresar(){
    location.href = "./index.html";
}


registrar_correo.value == "";
registrar_password.value == "";
registrar_password_repeat.value == "";

boton_registrar.addEventListener("click", registro);

function registro(){
    
    if (registrar_password_repeat == "" || registrar_correo.value == "" || registrar_password.value == ""){
        alert("Debes completar todos los campos")
    }

    else if (!registrar_correo.value.includes("@gmail.com", "@hotmail.com", "@outlook.com", "outlook.es")){
        registrar_correo.className = "error";
    }
    
    else if (registrar_password_repeat.value != registrar_password.value){
        registrar_password_repeat.className = "error";
    }

    else {
        localStorage.setItem(registrar_correo.value, registrar_password.value);
        registrar_correo.value = "";
        registrar_password.value = "";
        registrar_password_repeat.value = "";
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su usuario se ha registrado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
          
          setTimeout(() => {
            location.href = "./index.html";
          }, 1650);
    }
}

function desmarcar(){
    if (registrar_correo.className == "error"){
        registrar_correo.className = "";
    }

    else if (registrar_password.className == "error"){
        registrar_password.className = "";
    }

    else if (registrar_password_repeat.className == "error"){
        registrar_password_repeat.className = "";
    }   
}
div_main_inputs.addEventListener("change", desmarcar);