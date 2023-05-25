//Facultad para el modulo de agencias
const express = require('express');
const router = express.Router();
const tipoPermisoController = require('../controllers/tipoController');

//api/facultades
router.post('/', tipoPermisoController.addTipo);
router.get('/', tipoPermisoController.loadTipo);

module.exports = router;