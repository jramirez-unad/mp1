const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstuSchema = new Schema({
    nombre: { type: String, required: true }, //tittle:
    apellido: { type: String, required: true }, //description:
    matricula: { type: String, required: true },
    carrera: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: String, }
});

module.exports = mongoose.model('Estudiante', EstuSchema);