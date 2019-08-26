/**
 * Trainingdetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    training: {type:'string'},
    enableEbGuideForm: {type:'boolean'}
},
  datastores:'mongodb'
};

