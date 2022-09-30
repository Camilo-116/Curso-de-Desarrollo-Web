// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

$(document).ready(function () {
  var json, ref, eventos

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'http://127.0.0.1:5500/info.json'
  }).done(function (data) {
    json = data
    ref = new Date(json.fechaActual);
    eventos = json.eventos.filter(function (e) {
      return new Date(e.fecha).getTime < ref.getTime();
    });
    eventos = json.eventos.sort(function (a, b) {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    });
    var div = document.getElementById('pasados')
    eventos.forEach(evento => {
      div.innerHTML += `<h2>Nombre de evento: ${evento.nombre}</h2><br>
      <p><b>Fecha: </b>${evento.fecha}</p><br>
      <p><b>Descripción: </b>${evento.descripcion}</p><br>
      <p><b>Lugar: </b>${evento.lugar}</p><br>
      <p><b>Invitados: </b>${evento.invitados}</p><br>
      <p><b>Precio: ${evento.precio}</p></b><br>`
    });
  });

  //Guarda el resultado en variables

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas recientes primero)


  //Crea un string que contenga el HTML que describe el detalle del evento




  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
