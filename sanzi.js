function comenzar(){


primero = document.querySelectorAll('.inicio')
primero.addEventListener("click", inicial,false);

}

function inicial(){
  alert("hola");
}

window.addEventListener("load", comenzar, false);
