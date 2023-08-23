//función menú hamburguesa
document.getElementById("boton-menu").addEventListener("click", function () {      
    var menu = document.getElementById("menu");
    var icono = document.querySelector("#boton-menu span img");
  //agrega la clase "rotar" a la img del ícono
  icono.classList.toggle("rotar");
  //agrega la clase mostrando al menu para que se despliegue a traves de css
  menu.classList.toggle("mostrando");
});
//fin función menu hamburguesa