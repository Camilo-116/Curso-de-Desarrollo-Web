var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
}

function stringValido(string, largo) {
    if (string.trim() != null && string.trim().length >= largo) return true;
    return false
}

function fechaValida(fecha, minFecha) {
    if (fecha != null && fecha.getTime() > minFecha.getTime()) return true;
    return false
}

function eventoValido(evento) {
    if (stringValido(evento.nombre,3) && stringValido(evento.descripcion,10) && fechaValida(evento.fecha, new Date(2018,1,1))) return true;
    return false
}

console.log(eventoValido(evento))