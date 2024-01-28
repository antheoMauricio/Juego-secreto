
let intentos = 0;
let numeroSecreto =0;
let listaNumeroSorteados=[];
let titulo = document.querySelector('h1');
let numeroMax = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
   
  let numeroGenerado =   Math.floor(Math.random() * numeroMax)+1;
  console.log(listaNumeroSorteados);

    
if(listaNumeroSorteados.length == numeroMax){
    asignarTextoElemento('p',`ya se sortearon los numeros posibles`)
}
  //preguntamos si el numero generado esta incluido en la lista
  if(listaNumeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else{
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
    
  }
}



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento(`p`, `el numero secreto es mayor`);
        } else {
            asignarTextoElemento(`p`, `el numero secreto es menor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;
}

function reiniciarJuego(){
limpiarCaja();
condicionesIniciales();
return;

}

function condicionesIniciales(){
asignarTextoElemento(`h1`, 'Juego del numero secreto!');
asignarTextoElemento(`p`, `escribe un numero del 1 al ${numeroMax}`);
numeroSecreto = generarNumeroSecreto();
intentos=1; 
document.getElementById('reiniciar').setAttribute('disabled',true);
return;
}
asignarTextoElemento(`h1`, 'Juego del numero secreto!');
asignarTextoElemento(`p`, `escribe un numero del 1 al ${numeroMax}`);
