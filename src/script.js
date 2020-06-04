const dropzone = document.querySelectorAll(".dropzone");
const container = document.querySelectorAll(".container");

dropzone.forEach(drop => {
  drop.addEventListener("dragstart", dragstart);

  drop.addEventListener("drag", drag);

  drop.addEventListener("dragend", dragend);
});

function dragstart() {
  dropzone.forEach(drop => {
    drop.classList.add("geral-blur");
  });

  this.classList.add("is-dragging");
}

function drag() {
  // log('drag');
}

function dragend() {
  dropzone.forEach(drop => {
    drop.classList.remove("geral-blur");
  });

  this.classList.remove("is-dragging");
}

container.forEach(zone => {
  zone.addEventListener("dragenter", dragenter);
  zone.addEventListener("dragover", dragover);
  zone.addEventListener("dragleave", dragleave);
  zone.addEventListener("drop", drop);
});

function dragenter() {}

function dragover() {
  this.classList.add("over");
  const cardSelected = document.querySelector(".is-dragging");
  this.appendChild(cardSelected);

  //<div class="legend green"></div>
  const legenda = this.querySelector(".legend");

  //Pegar todo o estilo carregado da linha acima(no caso, pega a class e assim o backcolor)
  const style = window.getComputedStyle(legenda);

  /*
    Pega todo o elemento HTML onde esta a class status
    <div class="status green">
        <p>Sprint Meet</p>
    </div>
    */
  const status = cardSelected.querySelector(".status");

  //Dependendo do background encontrado, seta a cor atual e remove as outras.
  if (style.backgroundColor === "rgb(0, 128, 0)") {
    status.classList.remove("red");
    status.classList.remove("yellow");
    status.classList.add("green");
  } else if (style.backgroundColor === "rgb(255, 255, 0)") {
    status.classList.remove("red");
    status.classList.remove("green");
    status.classList.add("yellow");
  } else if (style.backgroundColor === "rgb(255, 0, 0)") {
    status.classList.remove("green");
    status.classList.remove("yellow");
    status.classList.add("red");
  }
}

function dragleave() {
  this.classList.remove("over");
}

function drop() {}

const btn = document.querySelector(".btn");

btn.onclick = function() {
  const textoDigitado = document.querySelector("input[type=text]");
  var texto = document.createTextNode(textoDigitado.value);
  var pElement = document.createElement("p");

  pElement.appendChild(texto);

  var divStatus = document.createElement("div");
  divStatus.setAttribute("class", "status red");
  divStatus.appendChild(pElement);

  var divDropzone = document.createElement("div");
  //divDropzone.setAttribute('class','dropzone is-dragging');
  divDropzone.setAttribute("class", "dropzone");
  divDropzone.setAttribute("draggable", "true");

  divDropzone.appendChild(divStatus);

  document.getElementById("div1").appendChild(divDropzone);

  //testes
};
