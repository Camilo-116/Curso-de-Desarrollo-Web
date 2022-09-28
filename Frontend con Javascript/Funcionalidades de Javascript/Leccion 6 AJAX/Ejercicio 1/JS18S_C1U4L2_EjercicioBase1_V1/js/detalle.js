// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  try {
    var id = location.href.match(/id=(\d)*/)[1]
  } catch (error) {
    console.log("No se incluyo el id");
  }
  var data, evento, html

  //Carga los datos que estan en el JSON (info.json) usando AJAX y Guarda el resultado en una variable
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (value) {
    data = value.eventos
    evento = data[id - 1]
    html = `<h2>${evento.nombre}</h2>
    <p><b>Fecha: </b>${evento.fecha}</p>
    <p>${evento.descripcion}</p>
    <p><b>Lugar: </b>${evento.lugar}</p>
    <p><b>Invitados: </b>${evento.invitados}</p>
    <p><b>Precio: ${evento.precio}</b></p>`
    $('#evento').html(html)
  })
});
