function fechaParaHumanos(fecha, fechaRerencia) {
    var t1 = fecha.getTime() / 1000; // segundos
    var t2 = fechaRerencia.getTime() / 1000; // segundos
    var diferencia;
    diferencia = Math.round(t2 - t1);
    if (diferencia < 1) {
        return "hace 1 segundo"
    } else if (diferencia < 60) {
        return `hace ${diferencia} segundos`
    }
    diferencia = Math.round(diferencia / 60);
    if (diferencia < 1) {
        return "hace 1 minuto"
    } else if (diferencia < 60) {
        return `hace ${diferencia} minutos`
    }
    diferencia = Math.round(diferencia / 60)
    if (diferencia < 1) {
        return "hace 1 hora"
    }else if (diferencia < 24) {
        return `hace ${diferencia} horas`
    }
    diferencia = Math.round(diferencia/24)
    return (diferencia <= 1) ? `hace 1 día` : `hace ${diferencia} días`
}

console.log(fechaParaHumanos(new Date(2022,8,21,14), new Date()));