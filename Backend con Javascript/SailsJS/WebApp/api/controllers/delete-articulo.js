module.exports = {


  friendlyName: 'Delete articulo',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 204
    }
  },


  fn: async function (inputs) {
    await Articulos.destroyOne(inputs.id);
    // All done.
    return;

  }


};
