const express = require('express')
const routerConciertos = require('./routes/conciertos')
const routerDeportes = require('./routes/deportes')
const routerGeneral = require('./routes/general')

const app = express()

app.use("/", routerGeneral)
app.use("/deportes", routerDeportes)
app.use("/conciertos", routerConciertos)

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})