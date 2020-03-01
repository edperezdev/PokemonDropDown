// Atrapa el botón y añade la clase is active al dropdown

function clicenboton(element) {
  let button = document.querySelector(element);
  button.onclick = () => {
    button.nextElementSibling.classList.toggle("is-active");
  };
}
// Previene que haya más de un dropdown abierto

function clearClasses(target) {
  document.querySelectorAll(".dropdown-content.is-active").forEach(item => {
    if (event.target.nextElementSibling !== item)
      item.classList.remove("is-active");
  });
}
// Cierra el dropdown si el usuario hace clic fuera

window.onclick = function(e) {
  clearClasses(event.target.nextElementSibling);
};

// Función para iterar botones en la función clic en botón

function IterarBotones() {
  let conteo2 = document.querySelectorAll("button");
  let contearray2 = Array.from(conteo2);
  for (i = 0; i < contearray2.length; i++) {
    let resultado2 = contearray2[i].innerHTML;
    clicenboton(`.js-${resultado2}`);
  }
}

IterarBotones();

// Función para cambiar las imágenes y nombres de los pokemon

function cambiarArticuloPkm(element) {
  let li = document.querySelector(element);
  li.addEventListener("click", function() {
    document.querySelector(".name-pkmn").innerHTML = li.innerHTML.toUpperCase();
    document.getElementById("img-pkmn").src = `images/pkmn/${li.innerHTML}.png`;
  });
}

// Para iterar cada nombre de pokemon en la función cambiarArticuloPkm

function IterarNombres() {
  let conteo = document.querySelectorAll("li");
  let contearray = Array.from(conteo);
  for (i = 0; i < contearray.length; i++) {
    let resultado = contearray[i].innerHTML;
    cambiarArticuloPkm(`.${resultado}`);
  }
}
IterarNombres();
