//console.log("Hola desde un archivo externo de javaScript");


//DOM
//querySelector selecciona solo un elemento si hay varios link solo devuelve el 1ro
/*let container=document.querySelector(".container");
console.log(container);
//ahora usaremos querySelectorALL :va recorrer todo el arbol
//buscara todos los elementos que cumplan con el criterio de busquedas
let links=document.querySelectorAll("a");
//PAra recorrer un arreglo
links.forEach(function(link){
  console.log(link);
});*/
/*esto registrara lo que el usuario da click
let celdas=document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener("click",function () {
    console.log(this);
  })
});*/
//AHora usaremos los saberes previos de arriba
//1ro Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//2do recorrer los elementos

links.forEach(function(link){
  //3ro agregar un elemento click a cada uno de ellos (case sensitive)
  //agregar el evento click a cada uno de elllas
  link.addEventListener("click",function(ev){
    //Para que el navergador no haga comportamiento
    //por defecto osea este codigo no te deja
    //retornar a la pagina
      ev.preventDefault();
      let content=document.querySelector(".content");
        //Quitarle las clases de animacion que contiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
        //Ahora agregaremos para animar salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");
        //hasta aca nuestra cierre de pagina de Parches
        //nos translada a una vacia ahora haremos que nos
        //direccione a la pagina principal se hace con location
        //con lo es muy rapido y no deja ver la animacion
        //setTimeout: pausea una sola vez despues de cierto tiempo
        setTimeout(function(){
          location.href="/boletines";
          //1000 es un segundo
        },600);
        //setInterval: pausea constantemente despues de cierto tiempo
        //setInterval
        location.href="/";

        return false;
  });
});
/*
let iconos=document.querySelectorALL("i");

iconos.forEach(function (icono) {
  //classList tiene metodos add ,remove
  icono.classList.remove("fa fa-star");
});
*/
