module.exports = {


  friendlyName: 'View vision',


  description: 'Display "Vision" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/mision_vision'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      title: 'Nuestra Visión',
      description: 'Nuestra visión es ser una empresa líder en el mercado de la construcción, con presencia nacional e internacional, reconocida por su calidad, innovación y compromiso con el desarrollo sostenible.'
    };

  }


};
