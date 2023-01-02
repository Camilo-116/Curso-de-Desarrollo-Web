module.exports = {


  friendlyName: 'View articulos',


  description: 'Display "Articulos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articulos'
    }

  },


  fn: async function () {

    var articulos = await Articulos.find().populate('comentarios');

    // Respond with view.
    return {articulos: articulos};

  }


};
