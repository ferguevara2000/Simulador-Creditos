const mongoose = require('mongoose')
const PeliculasSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    category:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    duration:{
        type:String,
        require:true
    },
    urlImage:{
        type:String,
        require: true
    },
    creationDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('peliculas',PeliculasSchema)