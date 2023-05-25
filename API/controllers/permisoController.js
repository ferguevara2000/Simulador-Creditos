const Permiso = require('../models/Permiso')

exports.addPermiso = async(req, res) => {
    try {
        let permiso
        permiso = new Permiso(req.body)
        await permiso.save()
        res.send(permiso)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al insertar el registro')
    }
}

exports.loadPermisos = async(req, res) => {
    try {
        const permisos = await Permiso.find()
        res.json(permisos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar los registros')
    }
}

exports.loadPermiso = async(req, res) => {
    try {
        let permiso = await Permiso.findById(req.params.id)
        if (!permiso) {
            res.status(500).send('No existe el permiso')
        }
        res.json(permiso)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar el registro')
    }
}

exports.deletePermiso = async(req, res) => {
    try {
        let permiso = Permiso.findById(req.params.id)
        if (!permiso) {
            res.status(500).send('No existe el permiso')
        }
        await Permiso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Permiso eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al eliminar el registro')
    }
}

exports.updatePermiso = async(req, res) => {
    try {
        const { nombre, apellido, nombreFacu, nombreT } = req.body
        let permiso = await Permiso.findById(req.params.id)
        if (!permiso) {
            res.status(500).send('No existe el permiso')
        }
        permiso.nombre = nombre
        permiso.apellido = apellido
        permiso.nombreFacu = nombreFacu
        permiso.nombreT = nombreT

        permiso = await Permiso.findOneAndUpdate({ _id: req.params.id }, permiso, { new: true })
        res.json(permiso)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el registro')
    }
}