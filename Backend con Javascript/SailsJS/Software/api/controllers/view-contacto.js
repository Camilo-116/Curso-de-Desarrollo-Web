module.exports = {


  friendlyName: 'View contacto',


  description: 'Display "Contacto" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contacto'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      numero: '1234567890',
      email: 'a@a.com',
      direccion: 'Calle 123, Colonia 123, Ciudad 123, Estado 123, C.P. 12345'
    };

  }


};
