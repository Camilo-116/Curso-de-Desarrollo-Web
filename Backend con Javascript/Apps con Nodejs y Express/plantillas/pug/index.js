const express = require('express')

const app = express()

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("pages/index", {title: "Mi Página", message: "Hola Mundo"})
})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})