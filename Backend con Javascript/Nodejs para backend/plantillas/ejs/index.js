const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("pages/index", {title: "Plantilla ejs", h1: "Plantilla hecha con ejs", message: "Hola Mundo", lista_i: 0})
})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})