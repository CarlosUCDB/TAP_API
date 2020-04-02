var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    email: String, // String is shorthand for {type: String}
    senha: String,
});
module.exports = usuarioSchema