function saludo(nombre,apellido,genero,evento,minutosQueFaltan) {
    var cadena = 'Bienvenid'
    nombre = nombre.trim().toUpperCase(); apellido = apellido.trim().toUpperCase();
    if (genero.trim().toLowerCase() == 'masculino'){
        cadena += 'o '
    }else{
        cadena += 'a '
    }
    cadena += nombre+' '+apellido+', recuerda '
    if (minutosQueFaltan<60*24){
        cadena += 'hoy '
    }else if (minutosQueFaltan<60*24*2) {
        cadena+='mañana '
    }else{
        cadena+='pronto '
    }
    cadena += 'el evento ('+evento+').'
    return cadena
}

console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500))