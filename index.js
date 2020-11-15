// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

//Constante que guarda la lista
const list = document.querySelector(".color-list");

//Crear la lista
colorList.forEach(createList);
//Funcion que la crea
function createList(colorElement, i) {
  const itemLi = document.createElement("li");

  const name = document.createElement("div");

  const divColor = document.createElement("div");

  const nextColor = document.createElement("button");

  const backColor = document.createElement("button");

  //Añadimos las clases tras crearlas
  itemLi.classList.add("color-item");
  name.classList.add("color-name");
  divColor.classList.add("color-show");
  nextColor.classList.add("color-set");
  backColor.classList.add("color-set");
  if (i % 2 !== 0) {
    itemLi.classList.add("color-item--odd");
  }
  //Añadimos el texto
  name.textContent = "Color " + colorElement.colorName;
  divColor.textContent = "Muestra";
  nextColor.textContent = "Color del siguiente item";
  backColor.textContent = "Color de pagina";

  divColor.style.backgroundColor = colorElement.hex;

  //Funciones y eventos
  //Alerta con el nombre de color
  itemLi.addEventListener("click", e => {
    e.stopPropagation();
    alert("color: " + colorElement.colorName);
  });

  //Color de fondo
  backColor.addEventListener(
    "click",
    event => {
      event.stopPropagation();
      document.body.style.backgroundColor = colorElement.hex;
    },
    false
  );

  //Siguiente color
  nextColor.addEventListener("click", nextColorEle, false);
  function nextColorEle(evento) {
    evento.stopPropagation();
    if (colorList.length - 1 != i) {
      nextColor.parentNode.nextSibling.style.backgroundColor = colorElement.hex;
    } else {
      nextColor.parentNode.parentNode.children[1].style.backgroundColor =
        colorElement.hex;
    }
  }

  //Grupos de creacion de filas
  itemLi.appendChild(name);
  itemLi.appendChild(divColor);
  itemLi.appendChild(nextColor);
  itemLi.appendChild(backColor);
  list.appendChild(itemLi);

  document.body.addEventListener("click", () => {
    alert("body");
  });
}
