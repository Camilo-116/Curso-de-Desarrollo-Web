const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/procesar", (req, res) => {
    var username = req.body.username
    // validate email with regex
    var email = req.body.email
    var re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var re_username = / \s /
    if ( !re_username.test(username) && username.length>6 && re_email.test(email) ){
        res.send("Datos correctos. OK")
    }else{
        res.send("Datos incorrectos. ERROR")
    }

})

app.listen(8080, () => {
    console.log("Servidor Iniciado");
})