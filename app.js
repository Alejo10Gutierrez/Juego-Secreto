let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsurio').value = '';
    return;
}
//Funcion al hacer click en un boton
function verificarIntento() {
    let numeroDeUsurio = parseInt(document.getElementById('valorUsurio').value);

    if (numeroDeUsurio === numeroSecreto) {
        asignarTextElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsurio > numeroSecreto) {
            asignarTextElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextElemento('p', `Ya se sortearon todos los numeros posibles`);
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextElemento('p', `Elige un numero del 1 al ${numeroMaximo}`);
    asignarTextElemento('h1', 'Juego del numero secreto');
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
condicionesIniciales();
