//Facultad para el modulo de agencias
const express = require('express');
const router = express.Router();
const facultadController = require('../controllers/facultadController');

//api/facultades
router.post('/', facultadController.addFacultad);
router.get('/', facultadController.loadFacultades);

module.exports = router;