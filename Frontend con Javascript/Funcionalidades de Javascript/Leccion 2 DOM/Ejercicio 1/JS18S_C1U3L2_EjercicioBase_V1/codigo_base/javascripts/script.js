
function validar(formulario) {

  var vn = validarNombre(formulario.nombre), ve = validarEmail(formulario.email), vp = validarPass(formulario.contrasena),
  vc = confPass(formulario), vg = validarGenero(formulario.genero), vpa = validarPais(formulario.pais),
  vt = confCh(formulario.terminos, "errorTerm")

  if (!vn || !ve || !vp || !vc || !vg || !vpa || !vt) {
    return false
  }

  alert("Datos enviados");

  return true;
}

function validarNombre(nombre) {

  var longNombre = nombre.value.trim().length

  if (longNombre == 0 || longNombre < 3) {
    var motivo
    (longNombre == 0) ? motivo = "Campo obligatorio" : (longNombre < 3) ? motivo = "El nombre debe ser de mínimo 3 caracteres" : {}
    document.getElementById("errorNombre").innerText = motivo
    nombre.value = ""
    nombre.focus()
    return false
  }
  document.getElementById("errorNombre").innerText = ""
  return true
}

function validarEmail(email) {

  var regex = /[\w]*@[\w]*/
  console.log(regex.test(email.value));
  if (!regex.test(email.value)) {
    document.getElementById("errorEmail").innerText = "Introduzca un email válido"
    email.value = ""
    email.focus()
    return false
  }
  document.getElementById("errorEmail").innerText = ""
  return true
}

function validarPass(password) {

  var longPass = password.value.trim().length

  if (longPass == 0 || longPass < 5) {
    var motivo
    (longPass == 0) ? motivo = "Campo obligatorio" : (longPass < 5) ? motivo = "La contraseña debe ser de mínimo 5 caracteres" : {}
    document.getElementById("errorPass").innerText = motivo
    password.value = ""
    password.focus()
    return false
  }
  document.getElementById("errorPass").innerText = ""
  return true
}

function confPass(formulario) {
  
  if (formulario.contrasena.value !== formulario.confirmacion.value){
    document.getElementById("errorConf").innerText = "La contraseña no coincide"
    formulario.confirmacion.value = ""
    formulario.confirmacion.focus()
    return false
  }
  document.getElementById("errorConf").innerText = ""
  return true
}

function validarGenero(genero) {
  if (genero.value == ""){
    document.getElementById("errorRad").innerText = "El campo es obligatorio"
    return false
  }
  document.getElementById("errorRad").innerText = ""
  return true
}

function validarPais(pais) {
  if (pais.value == ""){
    document.getElementById("errorOpt").innerText = "El campo es obligatorio"
    return false
  }
  document.getElementById("errorOpt").innerText = ""
  return true
}

function confCh(checkBox) {
  
  if (!checkBox.checked){
    document.getElementById("errorTerm").innerText = "El campo es obligatorio"
    return false
  }
  document.getElementById("errorTerm").innerText = ""
  return true
}
