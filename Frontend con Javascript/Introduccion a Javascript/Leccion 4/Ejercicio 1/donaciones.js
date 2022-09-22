var donaciones = [5,15,22,25,30,52,5,1,0]

function minimo(donaciones) {
    var min = 999;
    for (var donacion of donaciones){
        (donacion <= min) ? min = donacion : {}
    }
    return min
}

function maximo(donaciones) {
    var max = 0
    for (var donacion of donaciones) {
        (donacion >= max) ? max = donacion : {}
    }
    return max
}

function promedio(min, max, donaciones) {
    var sum = 0
    for (var donacion of donaciones){
        (donacion == min || donacion == max) ? {} : sum+=donacion
    }
    return sum/donaciones.length
}

var min = minimo(donaciones);

var max = maximo(donaciones);

console.log(min);

console.log(max);

console.log(promedio(min, max, donaciones))