function validarNombre() {
    var nombre = document.getElementById('nombre');
    var regex = /^[\a-zA-Z]{2}[\a-zA-Z]*/, num = /[0-9]/
    if (regex.test(nombre.value) && !num.test(nombre.value)) {
        document.getElementById('error').innerHTML = ""
    } else {
        if (nombre.value == "") {
            document.getElementById('error').innerHTML = "El nombre no debe estar vacío."
        } else if (nombre.value.length < 3) {
            document.getElementById('error').innerHTML = "El nombre debe contener por lo menos tres caracteres."
        } 
        if (num.test(nombre.value)) {
            document.getElementById('error').innerHTML = "El nombre no debe contener números"
        }
    }
}

document.addEventListener("keypress", validarNombre())
