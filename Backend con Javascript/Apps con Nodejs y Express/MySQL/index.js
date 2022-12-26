const express = require('express');
const app = express();

app.set("view engine", "ejs")

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'camilo9116',
    database: 'cursonode'
});

app.get('/', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);

        var query = "SELECT COUNT(*) as cuenta FROM taller"

        connection.query(query, (error, rows) => {
            connection.release();

            if (error) {
                console.log(error);
            } else {
                res.render('pages/index', { nom_tabla: 'taller', num_registros: rows[0].cuenta });
            }
        });
    });
});

app.listen(8080, () => {
    console.log('Servidor funcionando');
});