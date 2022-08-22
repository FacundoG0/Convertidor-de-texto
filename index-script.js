// *********************************************************************************************************
// *********************************************************************************************************
//                                          LOGIN
// *********************************************************************************************************
// *********************************************************************************************************

let main = document.createElement("main");
let div_main_inputs = document.createElement("div");
let div_crear_recuperar = document.createElement("div");

document.body.append(main);
main.append(div_main_inputs);
main.append(div_crear_recuperar);

div_main_inputs.innerHTML = "<input id='correo' placeholder='Ingrese su correo'> <input type='password' id='password' placeholder='Ingrese su contraseña'> <button id='iniciar_sesion_btn'>Iniciar Sesión</button>";

div_crear_recuperar.innerHTML = "¿Aún no tiene cuenta? <a href='./registrarse.html'>Crear cuenta</a>";

// VALIDACIÓN LOGIN
let usuario = document.getElementById("correo");
let contraseña = document.getElementById("password");

let boton_iniciar_sesion = document.getElementById("iniciar_sesion_btn");

boton_iniciar_sesion.addEventListener("click", validar_datos);

function validar_datos(){

    let usuario_local = localStorage.getItem(usuario.value);

    if (usuario_local == contraseña.value) {

        boton_iniciar_sesion.addEventListener("click", redireccionar)
        function redireccionar(){
            location.href = './app.html'
        }
    }

    else {
        alert("el usuario no existe")
    }

}