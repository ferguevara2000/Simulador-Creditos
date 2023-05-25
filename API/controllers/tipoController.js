const Tipo = require('../models/TipoPermiso')

exports.addTipo = async(req, res) => {
    try {
        let tipoPermiso
        tipoPermiso = new Tipo(req.body)
        await tipoPermiso.save()
        res.send(tipoPermiso)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al insertar el registro')
    }
}

exports.loadTipo = async(req, res) => {
    try {
        const tipoPermiso = await Tipo.find()
        res.json(tipoPermiso)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar los registros')
    }
}