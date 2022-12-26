const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Bienvenido")
})

app.get("/cliente/:id", (req, res) => {
    res.send("Bienvenido cliente: " + req.params.id)
})

app.get("/cliente/:id/cuenta/:cuenta", (req, res) => {
    var response = `Bienvenido a la cuenta ${req.params.cuenta} del cliente ${req.params.id}`
    if (req.query.orden === 'numero'){
        response += `. Orden: ${req.query.orden}`
    }else{
        response += `. Orden: saldo`
    }
    res.send(response)
})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})