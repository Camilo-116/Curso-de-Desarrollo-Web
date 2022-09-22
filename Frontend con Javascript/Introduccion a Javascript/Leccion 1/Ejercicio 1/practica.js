function totalMinutos(horas,minutos) {
    return horas * 60 + minutos
}

function cantidadRecolectadaSimple(participantes,costo) {
    return participantes * costo
}

function cantidadRecolectada(cantidadAdultos,cantidadEstudiantes,costoAdultos,costoEstudiantes) {
    return cantidadAdultos * costoAdultos + cantidadEstudiantes * costoEstudiantes
}