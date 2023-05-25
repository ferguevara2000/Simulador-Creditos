// Rutas para el esquema de agencias
const express = require('express')
const router = express.Router()
const agencyController = require('../controllers/agencyController')

//api/agencias
router.post('/', agencyController.addAgency)
router.get('/', agencyController.loadAgencies)
router.put('/:id', agencyController.updateAgency)
router.get('/:id', agencyController.loadAgency)
router.delete('/:id', agencyController.deteleAgancy)

module.exports = router