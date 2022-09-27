function loPrometidoesDeuda() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            const number = parseInt(Math.random() * 10);
            if (number % 2 == 0) {
                resolve(number)
            }
            else {
                reject("Rechazado")
            }
        },
            1000)
    });
    return promise;
}

//Existen dos formas de obtener el resultado de la promesa


//De forma secuencial en el bloque de código, usando .then(function(result){}) y .catch(function(error){})
loPrometidoesDeuda().then(function (value) {
    var number = value;
    console.log(number);
}).catch(function (err) {
    console.log('error: ' + err);
}
)

//Llamando una funcion asíncrona, en la que se usa un try{}catch(error){} y await
async function recibe() {
    try {
        var number = await loPrometidoesDeuda();
        console.log(number);
    } catch (error) {
        console.log('Error: ' + error);
    }
}
// recibe();