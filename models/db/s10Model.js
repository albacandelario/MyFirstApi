const mongoose = require('mongoose');

module.exports = mongoose.model('Film', mongoose.Schema({
    titulo: String,
    duracion: Number,
}));