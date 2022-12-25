const express = require('express')

const routerDeportes = express.Router()

routerDeportes.get("/", (req, res) => {
    res.send("Esta es la página de Deportes")
})

routerDeportes.get("/futbol", (req, res) => {
    res.send("Futbol")
})

routerDeportes.get("/baloncesto", (req, res) => {
    res.send("Baloncesto")
})

module.exports = routerDeportes