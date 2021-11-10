const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Nombre: {
        type: String
    },
    apellidoPaterno: {
        type: String
    },
    apellidoMaterno: {
        type: String
    },
    correo: {
        type: String
    }
},
  {
  versionKey: false
});

module.exports =mongoose.model('user',userSchema);
