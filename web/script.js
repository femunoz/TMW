/* script.js*/

// No usamos getElementById, usamos el estándar de CSS
// para modificar algo, primero debemos tener una referencia en una variable. 
/*
const titulo = document.querySelector('.titulo-principal'); // creando puntero a nodo del árbol
console.log(titulo); // Muestra el objeto en la consola

titulo.textContent = "¡Cambiado desde JS!"; //en lugar de innerHTML por seguridad

// Mala práctica:
//titulo.style.color = "orange";
//titulo.style.fontSize = "3rem";

titulo.classList.add('resaltado');

console.log(titulo.classList);



const parrafos = document.querySelectorAll('p');
console.log("cantidad de parrafos:"+parrafos.length);

//parrafos[0].textContent = "Primer párrafo actualizado";


//for(i=0 ; i < parrafos.length; i++){
    parrafos[i].textContent = "Párrafo "+i+ " actualizado";
}
*/

// Funciona?
/*function cambiarMsg(){
    const titulo = document.querySelector('.titulo-principal');
    titulo.textContent = "¡Función ejecutada!";
    console.log("La función cambiarMensaje corrió con éxito."); 
}

// Sintaxis moderna (Arrow Function)
const nuevoMsg = () => {
    const titulo = document.querySelector('.titulo-principal');
    titulo.textContent = "¡Función flecha ejecutada!";
    console.log("La función cambiarMensaje corrió con éxito."); 
}
*/

// Obtenemos el objeto boton de clase .btn-accion
const boton = document.querySelector(".btn-accion");

boton.addEventListener('click',() => {

    console.log("Evento capturado. El usuario interactuó.");
    //alert("Interacción detectada");
    //document.body.classList.toggle('accesibilidad');
    
});

const body = document.querySelector("body");
//body.classList.add("accesibilidad");

