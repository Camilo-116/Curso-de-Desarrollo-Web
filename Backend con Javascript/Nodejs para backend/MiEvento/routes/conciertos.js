const express = require('express')

const routerConciertos = express.Router()

routerConciertos.get("/", (req, res) => {
    res.send("Esta es la página de Conciertos")
})

routerConciertos.get("/salsa", (req, res) => {
    res.send("Salsa")
})

routerConciertos.get("/tango", (req, res) => {
    res.send("Tango")
})

module.exports = routerConciertos