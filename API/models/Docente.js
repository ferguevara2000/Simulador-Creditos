const mongoose = require('mongoose')
const DocenteSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('docente', DocenteSchema)