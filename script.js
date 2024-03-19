// alert("Hola este es mi Javascript");

// let nombre = "Fernando";

// var nombre1 = "Fernando";

// const nombre2 = "Fernando";

// console.log(nombre)
// console.log(nombre1)
// console.log(nombr2)


//menu responsive js
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};



//SELECCIONAR ELEMENTOS
let contenidoTitulo = "Mejores animes";

let titulo = document.querySelector(".section-gral .section-titulo h1");
console.log(titulo)
titulo.innerHTML = contenidoTitulo;

 let textoTitulo = titulo.innerText;
 console.log(textoTitulo)

 if (textoTitulo == "Mejores animes") {
    titulo.innerHTML = "Peores animes"
 } else {
    console.log("false")
 }


 // FUNCIONES 


let name1 = "Fernando";
let city = "Lima";
let like = "anime";

let parrafo = document.querySelector(".section.section-1 span");
 function cambiarTexto (nombre, ciudad, gusto) {
   let contenido = `Hola, me llamo ${nombre}, vivo en la ciudad de ${ciudad} y me gusta el ${gusto}`;
   return contenido;
 }

 parrafo.innerText = cambiarTexto(name1, city, like);