function telf(telf) {
    var regex = /^[0-9]+([-\s][0-9]+)*/
    console.log(regex.test(telf));
}

function fecha(fecha) {
    var regex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}/
    console.log(regex.test(fecha));
}

function codigo(codigo) {
    var regex = /^[0-9]{3}/
    console.log(regex.test(codigo));
}

telf('A-123');telf('123-1212-123');fecha('12/01/1999');fecha('12-01-1999');codigo('A12');codigo('123')