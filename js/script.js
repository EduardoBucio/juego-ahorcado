// Variables
let logo = document.getElementById('logo');
let botonera1 = document.getElementById('botonera1');
let botonera2 = document.getElementById('botonera2');
let divAgregaPalabra = document.getElementById('divAgregaPalabra');

// Funciones
function recargaPagina(){
    logo.location.reload();
}

function iniciarJuego(){
    botonera1.classList.add('d-none');
}

function agregarPalabra(){
    // Esconde la botonera1
    botonera1.classList.add('d-none');

    // Habilita el area de texto
    divAgregaPalabra.classList.remove('d-none');
    
    // Habilita la botonera2
    botonera2.classList.remove('d-none');
}

// Agrega la palabra nueva al array existente
function agregaPalabraArray(){    
    let palabraNueva = document.getElementById('inputAgregaPalabra').value;
    palabrasSecretas.push(palabraNueva);
    console.log(palabrasSecretas);
    
    // Esconde el area de texto
    divAgregaPalabra.classList.add('d-none');
    
    // Esconde la botonera2
    botonera2.classList.add('d-none');

}

// Array con palabras precargadas inicialmente
let palabrasSecretas = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "DEVELOPER"
];

// Funcion del boton cancelar de agrega palabra
function cancelar(){           
    // Esconde el area de texto
    divAgregaPalabra.classList.add('d-none');
    
    // Esconde la botonera2
    botonera2.classList.add('d-none');

    // Esconde la botonera1
    botonera1.classList.remove('d-none');


}

