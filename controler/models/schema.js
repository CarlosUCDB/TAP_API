var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var curso = new Schema({
    titulo: String, // String is shorthand for {type: String}
    professor: String,
    cargaHoraria: String,
    dataInicio: String,
    dataTermino: String
});
module.exports = curso