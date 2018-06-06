'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  uid: {
    type: Number,
    required: 'Ingrese el id del usuario'
  },
  username: {
    type: String,
    required: 'Nombre del usuario'
  },
  description: {
    type: String,
    required: 'descripcion del usuario'
  }
});

module.exports = mongoose.model('Users', UserSchema);