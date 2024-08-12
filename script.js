const textareaMensaje = document.getElementById('textareaMensaje');
const textareaResultado = document.getElementById('textareaResultado');
const buttonEncriptar = document.getElementById('btnEncriptar');
const buttonDesencriptar = document.getElementById('btnDesencriptar');
const buttonCopiar = document.getElementById('btnCopiar');
var mostrar = document.getElementById('mostrar');
var ocultar = document.getElementById('ocultar');


// Función Encriptar
function encriptar() {
    var encriptarMensaje = textareaMensaje.value
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

    textareaResultado.getElementById = 'textareaResultado';
    textareaResultado.innerText = encriptarMensaje;

}

function msjEncriptar() {

    if (textareaMensaje.value === "") {
        alert("Por favor ingrese texto");
    } else if (textareaMensaje.value.match(/^[a-z ]*$/)) {
        encriptar();
        mostrar.className = 'activo';
        ocultar.className = 'oculto';

    } else {
        alert("Solo se permiten letras minúsculas y espacios");
    }
}
buttonEncriptar.onclick = msjEncriptar;

// Función desencriptar
function desencriptar() {
    var desencriptarMensaje = textareaMensaje.value

        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    textareaResultado.getElementById = 'textareaResultado';
    textareaResultado.innerText = desencriptarMensaje;

}

//Funcion mostrar y ocultar

function msjDesencriptar() {

    if (textareaMensaje.value === "") {
        alert("Por favor ingrese texto encriptado");
        mostrar.className = 'oculto';
        ocultar.className = 'cont-info';
    } else if (textareaMensaje.value.match(/^[a-z ]*$/)) {
        desencriptar();
        mostrar.className = 'activo';
        ocultar.className = 'oculto';

    }
    else {
        //msjInfo();
        textareaMensaje.value = '';
        mostrar.className = 'oculto';
        ocultar.className = 'cont-info';
    }
}
buttonDesencriptar.onclick = msjDesencriptar;

// Funcion para copiar el texto
function copiarTexto() {
    var copiarResultado = document.getElementById('textareaResultado').value;

    navigator.clipboard.writeText(copiarResultado).then(() => {
        textareaMensaje.value = '';
        alert("Texto copiado");

    })
}
buttonCopiar.onclick = copiarTexto;