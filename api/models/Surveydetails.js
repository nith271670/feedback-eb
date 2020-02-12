/**
 * Trainingdetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    survey: {type:'string'},
    location: {type:'string'},
    from_date: {type:'string'},
    to_date: {type:'string'}
},
  datastores:'mongodb'
};

