const mongoose = require('mongoose')
const PermisosSchema = mongoose.Schema({
    docente: {
        type: String,
        require: true
    },
    facultad: {
        type: String,
        require: true
    },
    tipoPermiso: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('permisos', PermisosSchema)