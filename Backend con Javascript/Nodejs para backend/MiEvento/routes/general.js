const express = require('express')

const routerGeneral = express.Router()

routerGeneral.get("/", (req, res) => {
    res.send("Bienvenido")
})

module.exports = routerGeneral