var eventos = [];

function iniciarEventos() {
  for (var i = 1; i < 200; i++) {
    eventos.push({
      nombre: "Evento " + i,
      descripcion: "Esta es la descripción del evento " + i,
    })
  }
}

iniciarEventos();

var eventosLeft = eventos.slice();


function pushFive() {
  var div = document.getElementById("eventos");
  var n
  (eventosLeft.length >= 5) ? n=5 : n = eventosLeft.length
  for (let i = 0; i < n; i++) {
    div.innerHTML += `<div style="border-bottom: 2px solid black;width: fit-content; margin-bottom: 10px;"><h2>${eventosLeft[i].nombre}</h2><p>${eventosLeft[i].descripcion}</p></div>`;
  }
  eventosLeft.splice(0,5);
  (eventosLeft.length <= 0) ? document.getElementById("cargar").setAttribute("disabled",false) : {}
}

