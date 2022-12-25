const express = require('express')

const app = express()

var login = true

app.use(express.static("stylesheets"))

app.use("/logged", (req, res, next) => {
    if (login) {
        console.log("Middleware 1");
        next()
    } else {
        console.log('No se ha iniciado sesión')
        res.redirect("/")
    }
})

app.get("/", (req, res) => {
    res.send("Hola Mundo");
})

app.get("/logged", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})