const mongoose = require('mongoose')
const TipoSchema = mongoose.Schema({
    nombreT: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('TipoPermiso', TipoSchema)