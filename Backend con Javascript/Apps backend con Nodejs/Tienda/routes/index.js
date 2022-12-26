var express = require('express');
var router = express.Router();
const mysql = require('mysql');

// Create connections pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'camilo9116',
  database: 'inventario'
});

/* GET home page. */
router.get('/', function (req, res, next) {

  // Get all products
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Conectado como ID: ' + connection.threadId);

    var query = "SELECT * FROM productos ORDER BY cantidad desc;"

    connection.query(query, (error, rows) => {
      connection.release();

      if (error) {
        console.log(error);
      } else {
        res.render('index', { productos: rows });
      }
    });
  })

});

router.get('/agregar-producto', function (req, res, next) {
  res.render('agregar_producto');
});

router.post('/agregar-producto', function (req, res, next) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Conectado como ID: ' + connection.threadId);

    var nombre = req.body.nombre
    var precio = req.body.precio
    var cantidad = req.body.cantidad;

    var query = `INSERT INTO productos (nombre, cantidad, precio) VALUES (${connection.escape(nombre)}, ${cantidad}, ${precio});`
    
    connection.query(query, (error, rows) => {
      connection.release();

      if (error) {
        console.log(error);
      } else {
        res.redirect('/');
      }
    });
  })
});

module.exports = router;
