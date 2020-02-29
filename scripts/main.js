

function clicenboton(element) {
    
    this.element = document.querySelector(element);
    this.element.onclick = () => {
     this.element.nextElementSibling.classList.toggle("is-active")
    }}

// FALTA PROBAR PARA QUE SE CIERRE UN DROPDOWN CUANDO EL RESTO ESTÁ ABIERTO
    // function clicenboton(element) {
    
    //     this.element = document.querySelector(element);
    //     this.element.addEventListener ("click", function () {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //           dropdowns[i].classList.remove('is-active');
    //         }
    //         this.element.nextElementSibling.classList.toggle("is-active")
    //     //  this.element.nextElementSibling.classList.toggle("is-active")
       
    //     })}

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



