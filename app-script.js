// VARIABLES
let main = document.createElement("main");
let crear_textarea = document.createElement("textarea");
let div_botones = document.createElement("div");

div_botones.innerHTML = ["<button id='btn_mayuscula'>Mayuscula</button> <button id='btn_minuscula'>Minuscula</button> <button id='btn_negrita'>Negrita</button> <button id='btn_copiar'>Copiar en portapapeles</button> <button id='btn_resetear'>Resetear</button>"];

// ATRIBUTOS DE BODY Y MAIN
document.body.append(main);
main.append(crear_textarea);
crear_textarea.setAttribute("id", "ingreso_textarea");
main.append(div_botones);

// INGRESO TEXT AREA (REUTILIZABLE)
let ingreso_textarea = document.getElementById("ingreso_textarea");
ingreso_textarea.placeholder = "Ingrese su texto aquí";

// CONVERTIR EN MAYUSCULA
function hacer_mayuscula(){
    let valor_textarea = ingreso_textarea.value;
    valor_textarea = ingreso_textarea.value.toUpperCase();
    ingreso_textarea.value = valor_textarea;
};

let click_btn_mayuscula = document.getElementById("btn_mayuscula");
click_btn_mayuscula.addEventListener("click", hacer_mayuscula);

// CONVERTIR EN MINUSCULA
function hacer_minuscula(){
    valor_textarea = ingreso_textarea.value.toLowerCase();
    ingreso_textarea.value = valor_textarea;
};

let click_btn_minuscula = document.getElementById("btn_minuscula");
click_btn_minuscula.addEventListener("click", hacer_minuscula);

// CONVERTIR EN NEGRITA
function hacer_negrita(){
    ingreso_textarea.setAttribute("class", "bold");
};

let click_btn_negrita = document.getElementById("btn_negrita");
click_btn_negrita.addEventListener("click", hacer_negrita);

// BOTON COPIAR
function copiar(){
    document.querySelector("#ingreso_textarea").select();
    document.execCommand("copy");
    alert("Texto copiado");
};

let click_btn_copiar = document.getElementById("btn_copiar");
click_btn_copiar.addEventListener("click", copiar);

// BOTON RESETEAR
function resetear(){
    ingreso_textarea.value = "";
    ingreso_textarea.removeAttribute("class");
}

let click_btn_resetear = document.getElementById("btn_resetear");
click_btn_resetear.addEventListener("click", resetear);