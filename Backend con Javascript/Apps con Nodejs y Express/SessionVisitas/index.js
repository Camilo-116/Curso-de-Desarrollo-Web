const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({secret: "secreto-xd-xdxd", resave: true, saveUninitialized: true}))

app.get("/", (req, res) => {
    (req.session.visitas) ? req.session.visitas++ : req.session.visitas = 1
    res.send("Visitas: " + req.session.visitas)
})

app.listen(8080, ()=> {
    console.log("Servidor Iniciado");
})