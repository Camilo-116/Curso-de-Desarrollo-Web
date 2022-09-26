function cambiarPais() {
    switch (document.getElementById('paises').value) {
        case 'colombia':
            localStorage.setItem('pais', 'colombia');
            break;
        case 'chile':
            localStorage.setItem('pais', 'chile');
            break;
        case 'peru':
            localStorage.setItem('pais', 'peru');
            break;
        case 'francia':
            localStorage.setItem('pais', 'francia');
            break;
        default:

            break;
    }
}

function getPais() {
    return document.getElementById('paisV').innerHTML = localStorage.getItem('pais');
}

getPais()