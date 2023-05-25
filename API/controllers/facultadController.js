const Facultades = require('../models/Facultad')

exports.addFacultad = async(req, res) => {
    try {
        let facultades
        facultades = new Facultades(req.body)
        await facultades.save()
        res.send(facultades)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al insertar el registro')
    }
}

exports.loadFacultades = async(req, res) => {
    try {
        const facultades = await Facultades.find()
        res.json(facultades)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar los registros')
    }
}