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

  var query_sort = ''
  // (req.query.ord) ?  : query_sort = ''
  if (req.query.ord) {
    query_sort = `ORDER BY ${req.query.ord} asc`
  }else{
    query_sort = ''
  }

  // Get all products
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Conectado como ID: ' + connection.threadId);

    var query = (query_sort.length > 0) ? `SELECT * FROM productos ${query_sort};` : `SELECT * FROM productos;`

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

router.get('/eliminar-producto/:id', function (req, res, next) {
  var prod_id = req.params.id;
  console.log(prod_id)

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Conectado como ID: ' + connection.threadId);

    var query = `DELETE FROM productos WHERE id = ${connection.escape(prod_id)};`

    connection.query(query, (error, rows) => {
      connection.release();

      if (error) {
        console.log(error);
      }
      else {
        res.redirect('/');
      }
    });
  })
});

module.exports = router;
