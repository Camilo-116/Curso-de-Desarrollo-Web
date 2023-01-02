module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/home'
    }

  },


  fn: async function () {

    sails.log.info('Se visitó la página de inicio.');
    // Respond with view.
    return {};

  }


};
