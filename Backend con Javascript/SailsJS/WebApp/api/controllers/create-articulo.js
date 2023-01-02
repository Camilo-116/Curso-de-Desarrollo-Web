module.exports = {


  friendlyName: 'Create articulo',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 201
    }
  },


  fn: async function () {
    var articulo = {
      descripcion: 'Articulo de prueba',
      precio: 100,
      modelo: 'Modelo de prueba',
      marca: 'Marca de prueba'
    };

    await Articulos.create(articulo).fetch();
    // All done.
    return;

  }


};
