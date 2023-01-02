const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');
const { connect } = require('../Tienda/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create connections pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'camilo9116',
    database: 'inventario'
});

app.get('/api/obtener-productos', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);
        connection

        var query = `SELECT * FROM productos;`

        connection.query(query, (err, rows) => {
            connection.release();
            if (err) throw err;
            if (rows.length > 0) {
                res.status(200)
                res.json({ data: rows });
            } else {
                res.status(404)
                res.json({ error: 'No se encontraron productos' });
            }

        })
    })
})

app.get('/api/obtener-producto/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);

        var query = `SELECT * FROM productos WHERE id = ${connection.escape(req.params.id)};`

        connection.query(query, (err, rows) => {
            connection.release();
            if (err) throw err;
            if (rows.length > 0) {
                res.status(200)
                res.json({ data: rows });
            } else {
                res.status(404)
                res.json({ error: 'No se encontró el producto' });
            }
        })

    })
})

app.post('/api/agregar-producto', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);

        var query = `INSERT INTO productos (nombre, cantidad, precio) VALUES (${connection.escape(req.body.nombre)}, ${connection.escape(req.body.cantidad)}, ${connection.escape(req.body.precio)});`
        connection.query(query, (err, rows) => {
            if (err) throw err;

            var newId = rows.insertId;
            var after_query = `SELECT * FROM productos WHERE id = ${connection.escape(newId)};`

            connection.query(after_query, (err, rows) => {
                connection.release();
                if (err) throw err;
                if (rows.length > 0) {
                    res.status(201)
                    res.json({ data: rows[0] });
                } else {
                    res.status(404)
                    res.json({ error: 'No se añadió el producto' });
                }
            })
        })
    })
})

app.put('/api/actualizar-producto/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);

        var check_query = `SELECT * FROM productos WHERE id = ${connection.escape(req.params.id)};`
        connection.query(check_query, (err, rows) => {
            if (err) throw err;
            if (rows.length > 0) {
                var query = `UPDATE productos SET nombre = ${connection.escape(req.body.nombre)}, cantidad = ${connection.escape(req.body.cantidad)}, precio = ${connection.escape(req.body.precio)} WHERE id = ${connection.escape(req.params.id)};`
                connection.query(query, (err, rows) => {
                    if (err) throw err;
                    var after_query = `SELECT * FROM productos WHERE id = ${connection.escape(req.params.id)};`
                    connection.query(after_query, (err, rows) => {
                        connection.release();
                        if (err) throw err;
                        if (rows.length > 0) {
                            res.status(200)
                            res.json({ data: rows[0] });
                        } else {
                            res.status(404)
                            res.json({ error: 'No se encontró el producto actualizado' });
                        }
                    })
                })
            } else {
                res.status(404)
                res.json({ error: 'No se encontró el producto a actualizar' });
            }
        })
    })
})

app.delete('/api/eliminar-producto/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Conectado como ID: ' + connection.threadId);

        var check_query = `SELECT * FROM productos WHERE id = ${connection.escape(req.params.id)};`
        connection.query(check_query, (err, rows) =>{
            if (err) throw err;
            if (rows.length > 0) {
                var query = `DELETE FROM productos WHERE id = ${connection.escape(req.params.id)};`
                connection.query(query, (err, rows) => {
                    if (err) throw err;
                    connection.release();
                    res.status(204).send('Se eliminó el producto')
                })
            } else {
                res.status(404)
                res.json({ error: 'No se encontró el producto a eliminar' });
            }
        })
    })
})

app.listen(8080, () => {
    console.log('API corriendo en el puerto 8080');
})