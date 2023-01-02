module.exports = {


  friendlyName: 'View mision',


  description: 'Display "Mision" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/mision_vision'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      title: 'Nuestra Misión',
      description: 'Nuestra misión es brindar servicios de calidad a nuestros clientes, con el fin de satisfacer sus necesidades y expectativas, a través de la mejora continua de nuestros procesos, con el apoyo de nuestro personal calificado y comprometido con la organización.'
    };

  }


};
