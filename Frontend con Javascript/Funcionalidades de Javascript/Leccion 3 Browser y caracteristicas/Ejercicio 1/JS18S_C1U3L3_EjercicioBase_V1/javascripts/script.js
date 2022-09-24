
var regexEs = /index.html?lang=es/, regexEn = /index.html?lang=en/
if (regexEn.test(location.search) || navigator.language == 'en') {
    document.getElementById('saludo').innerHTML = 'Welcome!'
} else if (regexEs.test(location.search)) {
    document.getElementById('saludo').innerHTML = '¡Bienvenido!'
} else {
    document.getElementById('saludo').innerHTML = '¡Bienvenido!'
}
