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

createList()


function createList(){
  let lista = document.getElementsByClassName("color-list");
    lista.addAttribute("id")

  //Grupos de creacion de filas
  let li1 = document.createElement("LI");
  let btn1= document.createElement("BUTTON");
  let btn1_1= document.createElement("BUTTON");
  let btn1_2= document.createElement("BUTTON");

  let li2 = document.createElement("LI");
  let btn2= document.createElement("BUTTON");
  let btn2_1= document.createElement("BUTTON");
  let btn2_2= document.createElement("BUTTON");

  let li3 = document.createElement("LI");
  let btn3= document.createElement("BUTTON");
  let btn3_1= document.createElement("BUTTON");
  let btn3_2= document.createElement("BUTTON");

  let li4 = document.createElement("LI");
  let btn4= document.createElement("BUTTON");
  let btn4_1= document.createElement("BUTTON");
  let btn4_2= document.createElement("BUTTON");

  let li5 = document.createElement("LI");
  let btn5= document.createElement("BUTTON");
  let btn5_1= document.createElement("BUTTON");
  let btn5_2= document.createElement("BUTTON");

  let li6 = document.createElement("LI");
  let btn6= document.createElement("BUTTON");
  let btn6_1= document.createElement("BUTTON");
  let btn6_2= document.createElement("BUTTON");

  let li7 = document.createElement("LI");
  let btn7= document.createElement("BUTTON");
  let btn7_1= document.createElement("BUTTON");
  let btn7_2= document.createElement("BUTTON");

  let li8 = document.createElement("LI");
  let btn8= document.createElement("BUTTON");
  let btn8_1= document.createElement("BUTTON");
  let btn8_2= document.createElement("BUTTON");


  //ordenarlas filas
  lista.appendChild(li1);
  li1.appendChild(btn1);




}






const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];