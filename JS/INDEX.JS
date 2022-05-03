'use strict';
const documentReady = () => {
  const formPrimo = document.getElementById('formPrimo');
  const Primo = (e) => {
    e.preventDefault();
    const numero1 = parseInt(document.getElementById('numeroPrimo').value);
    let prueba = 0;
    let contador = 0;
    let auxiliar=Math.trunc(numero1/2);
    const contenedorResultado = document.getElementById('contenedorResultado');
    for (let index = 1; index <= auxiliar; index++) {
        prueba=numero1 % index;
        console.log(index);
        if (prueba==0) {
            contador++;
        }
    }
    if (contador==1||numero1==1) {
        console.log("si es primo");
        contenedorResultado.innerHTML = "<h1>si es primo </h1>";
    }
    else{
        console.log("no es primo");
        contenedorResultado.innerHTML = "<h1>no es primo </h1>";
    }
  };

  formPrimo.addEventListener('submit', Primo);
}

document.addEventListener('DOMContentLoaded', documentReady);