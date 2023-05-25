const Peliculas = require("../models/Peliculas")

exports.addPelicula = async(req, res) => {
    try
    {
        let pelicula
        //Crear el curso
        pelicula = new Peliculas(req.body)
        await pelicula.save()
        res.send(pelicula)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al registrar el curso')
    }
}

exports.loadPeliculas = async(req,res) => {
    try
    {
        const peliculas = await Peliculas.find()
        res.json(peliculas)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')        
    }
}

exports.loadPelicula = async(req,res) => {
    try{
        let pelicula = await Peliculas.findById(req.params.id)
        if(!pelicula){
            res.status(404).json({msg: 'No existe la pelicula'})
        }
        res.json(pelicula)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro')        
    }
}

exports.updatePelicula = async(req,res) => {
    try{
        const {name, category, description, duration, urlImage} = req.body
        let pelicula = await Peliculas.findById(req.params.id)
        if(!pelicula){
            res.status(404).json({msg: 'No existe la pelicula'})
        }
        pelicula.name = name
        pelicula.category = category
        pelicula.description = description
        pelicula.duration = duration
        pelicula.urlImage = urlImage
        
        pelicula = await Peliculas.findOneAndUpdate({ _id:req.params.id}, pelicula, {new:true})
        res.json(pelicula)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')        
    }
}

exports.deletePelicula = async(req,res) => {
    try{
        let pelicula = await Peliculas.findById(req.params.id)
        if(!pelicula){
            res.status(404).json({msg: 'No existe la pelicula'})
        }
        await Peliculas.findOneAndRemove({ _id:req.params.id})
        res.json({msg: 'Curso eliminado con éxito'})        
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')        
    }   
}