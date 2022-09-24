var arreglo1 = [1,2,3,4,5];
var arreglo2 = [1,2,4,8];

function doble(arreglo) {
    return arreglo.map(x => {
        return x*2
    })
}

function impar(arreglo) {
    return arreglo.filter(x => {
        return x%2 == 1
    })
}

function dobleMitad(arreglo) {
    return arreglo.map(x => {
        return (x%2 == 0) ? x/2 : x*2;
    })
}