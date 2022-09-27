// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = window.location.href.match(/id=(\d)*/)[1]
  var data

  //Carga los datos que estan en el JSON (info.json) usando AJAX y Guarda el resultado en una variable
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(value) {
    data = value.eventos
  })

  //Busca el elemento en el arreglo
  var evento = data[id-1]

  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = `<h2>${evento.nombre}</h2>
  <p><b>Fecha: </b>${evento.fecha}</p>
  <p>${evento.descripcion}</p>
  <p><b>Lugar: </b>${evento.lugar}</p>
  <p><b>Invitados: </b>${evento.invitados}</p>
  <p><b>Precio: ${evento.precio}</b></p>` 

  //Modifica el DOM agregando el html generado dentro del div con id=evento
  $('#evento').html(html)
});
