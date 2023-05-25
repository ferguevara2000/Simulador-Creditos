const Agency = require("../models/Agency")

exports.addAgency = async(req, res) => {
    try {
        let agency
            //Crear la agencia
        agency = new Agency(req.body)
        await agency.save()
        res.send(agency)
    } catch (error) {
        console.log(error)
        res.status(500).send('Huno un error al registrar la agencia') //error interno del servidor 500

    }
}
exports.loadAgencies = async(req, res) => {
    try {
        const agencies = await Agency.find()
        res.json(agencies)
    } catch (error) {
        console.log(error)
        res.status(500).send('Huno un error al cargar el listado')
    }

}

exports.loadAgency = async(req, res) => {
    try {
        let agency = await Agency.findById(req.params.id)
        if (!agency) {
            res.status(404).json({ msg: 'No existe la agencia' })
        }
        res.json(agency)
    } catch (error) {
        console.log(error)
        res.status(500).send('Huno un error al cargar un registro')
    }
}

exports.updateAgency = async(req, res) => {
    try {
        const { name, address } = req.body
        let agency = await Agency.findById(req.params.id)
        if (!agency) {
            res.status(404).json({ msg: 'No existe la agencia' })
        }
        agency.name = name
        agency.address = address

        agency = await Agency.findOneAndUpdate({ _id: req.params.id }, agency, { new: true })
        res.json(agency)
    } catch (error) {
        console.log(error)
        res.status(500).send('Huno un error al actualizar el registro')
    }

}
exports.deteleAgancy = async(req, res) => {
    try {
        let agency = await Agency.findById(req.params.id)
        if (!agency) {
            res.status(404).json({ msg: 'No existe la agencia' })
        }
        await Agency.findOneAndRemove({ _id: req.params.id })
        res.json({ msq: 'Agencia eliminada con exito' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Huno un error al eliminar el registro')
    }
}