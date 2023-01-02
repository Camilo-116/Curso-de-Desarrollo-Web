module.exports = {


  friendlyName: 'Crear solicitud',


  description: '',


  inputs: {
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    servicio: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    telefono: {
      type: 'string'
    }
  },


  exits: {
    success: {
      responseType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {

    var newSolicitud = await Solicitudes.create({
      nombre: inputs.nombre,
      apellido: inputs.apellido,
      servicio: inputs.servicio,
      email: inputs.email,
      telefono: parseInt(inputs.telefono)
    }).fetch();

    sails.log.info('Se creó una nueva solicitud de servicio.\nSolicitud:\n', newSolicitud);

    // All done.
    return exits.success('/', {newSolicitud});

  }


};
