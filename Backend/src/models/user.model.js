const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    cedula: String,
    nombre: String,
    apellido: String,
    edad: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('usuario', usuarioSchema);
