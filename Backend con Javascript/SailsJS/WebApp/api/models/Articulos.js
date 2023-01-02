/**
 * Articulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    descripcion: {
      type: 'string',
      allowNull: true
    },

    precio: {
      type: 'number',
      min: 50,
      required: true
    },

    modelo: {
      type: 'string',
      minLength: 2,
      required: true
    },

    marca: {
      type: 'string',
      minLength: 2,
      required: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    comentarios: {
      collection: 'Comentarios',
      via: 'articulo'
    }

  },

  // beforeCreate: async (valuesToSet, proceed) => {
  //   console.log('Vine acá');
  //   console.log(`Values to set: ${valuesToSet}`);
  //   return proceed();
  // },

  afterCreate: async (articulo, proceed) => {
    await Bitacora.create({articulo_id: articulo.id, descripcion: 'Creado'});

    return proceed();
  }

};

