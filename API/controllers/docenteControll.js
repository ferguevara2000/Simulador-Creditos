const Docente = require('../models/Docente')

exports.addDocente = async(req, res) => {
    try {
        let docente
        docente = new Docente(req.body)
        await docente.save()
        res.send(docente)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al insertar el registro')
    }
}

exports.loadDocentes = async(req, res) => {
    try {
        const docentes = await Docente.find()
        res.json(docentes)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar los registros')
    }
}