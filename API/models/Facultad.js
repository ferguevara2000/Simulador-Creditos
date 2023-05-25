const mongoose = require('mongoose')
const FacultadesSchema = mongoose.Schema({
    nombreFacu: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('facultad', FacultadesSchema)