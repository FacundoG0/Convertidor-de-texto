//***********************************************************************************************

//                                      BASE DE DATOS

//***********************************************************************************************

let main = document.createElement("main");
let div_main_inputs = document.createElement("div");

document.body.append(main);
main.append(div_main_inputs);

div_main_inputs.innerHTML = "<input id='registrar_correo' placeholder='Ingrese su correo'> <input type='password' id='registrar_password' placeholder='Ingrese una contraseña'> <input type='password' id='registrar_password_repeat' placeholder='Repita su contraseña'> <button id='boton_registrar'>Registrarse</button> <button id='boton_regresar'>Regresar</button> <button id='pokerandom'>Ver Pokemon Random</button>";

//REGISTRAR INPUTS
let registrar_correo = document.getElementById("registrar_correo");
let registrar_password = document.getElementById("registrar_password");
let registrar_password_repeat = document.getElementById("registrar_password_repeat");

//BOTONES
let boton_registrar = document.getElementById("boton_registrar");
let boton_regresar = document.getElementById("boton_regresar")
let boton_pokerandom = document.getElementById("pokerandom");

//FUNCION BOTON REGRESAR
boton_regresar.addEventListener("click", regresar);

function regresar(){
    location.href = "./index.html";
}


registrar_correo.value == "";
registrar_password.value == "";
registrar_password_repeat.value == "";

// boton_registrar.addEventListener("click", token);

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
div_main_inputs.addEventListener("keydown", desmarcar);



// TOKEN CONTRASEÑA

// function token(){
//     let crear_codigo = registrar_password.value;
    
//     let token = [];
    
//     for (let i = 0; i < crear_codigo.length; i++) {
//         let calculo = Math.random(i)*10
//         token.push(calculo)

//         token.join()
//     }

//     console.log(token)
// }


//***********************************************************************************************

//                                  POKEMON RANDOM

//***********************************************************************************************

let div_pokerandom = document.createElement('div')
main.append(div_pokerandom)

let pokeinput = div_pokerandom.innerHTML = "<input type='text' id='pokename' placeholder='ingrese nombre de su pokemon'>"


let pokerandom = () => {
    
    let pokename = document.getElementById('pokename').value
    // let sprite
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)

    .then(response => response.json())
    .then(data => {
    
        // sprite = data.sprites.front_default

        // JSON.parse(data.front_default)
        
        let pokeimg = data.sprites.front_default
    
        console.log(pokeimg)
    
        div_pokerandom.innerHTML = `<img src='${pokeimg}'>` + pokeinput
    })
    

    // div_pokerandom.innerHTML = pokeimg
}

boton_pokerandom.addEventListener('click', pokerandom)