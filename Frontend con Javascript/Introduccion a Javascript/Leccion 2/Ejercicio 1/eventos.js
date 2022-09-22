function encabezadoEvento(evento,lugar) {
    return 'Evento: '+evento+'.\nLugar: '+lugar
}

function limpiarNombreParticipante(nombre,apellido) {
    nombre = nombre.trim(); apellido = apellido.trim();
    nombre = nombre.toLowerCase(); apellido = apellido.toUpperCase();
    return apellido+', '+nombre
}