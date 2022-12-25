var express = require('express')
var app = express()
app.get("/", (peticion, respuesta) => {
    respuesta.send("Bienvenido")
})

app.get("/messi", (peticion, respuesta) => {
    respuesta.sendFile(__dirname + "/public/que_miras_bobo.html")
})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})