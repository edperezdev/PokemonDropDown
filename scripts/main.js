// Atrapa el botón y añade la clase is active al dropdown

function clicenboton(element) {
  this.element = document.querySelector(element);
  this.element.onclick = () => {
    this.element.nextElementSibling.classList.toggle("is-active");
  };
}
// Previene que haya más de un dropdown abierto
function clearClasses (target){
  document.querySelectorAll('.dropdown-content.is-active').forEach((item)=>{
    if(event.target.nextElementSibling !== item)
      item.classList.remove('is-active');
  })
}
// Cierra el dropdown si el usuario hace clic fuera
window.onclick = function(e) {
  clearClasses(event.target.nextElementSibling);
}
// Variables para los botones

let agua = new clicenboton(".js-Agua");
let fuego = new clicenboton(".js-Fuego");
let tierra = new clicenboton(".js-Tierra");
let electrico = new clicenboton(".js-Eléctrico");
let fantasma = new clicenboton(".js-Fantasma");
let psiquico = new clicenboton(".js-Psíquico");
let veneno = new clicenboton(".js-Veneno");
let siniestro = new clicenboton(".js-Siniestro");
let bicho = new clicenboton(".js-Bicho");
let roca = new clicenboton(".js-Roca");
let hielo = new clicenboton(".js-Hielo");
let dragon = new clicenboton(".js-Dragón");
let hada = new clicenboton(".js-Hada");
let acero = new clicenboton(".js-Acero");
let lucha = new clicenboton(".js-Lucha");
let normal = new clicenboton(".js-Normal");
let volador = new clicenboton(".js-Volador");
let hierba = new clicenboton(".js-Hierba");
