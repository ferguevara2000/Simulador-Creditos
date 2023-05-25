//docente para el modulo de agencias
const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteControll');

//api/docentes
router.post('/', docenteController.addDocente);
router.get('/', docenteController.loadDocentes);

module.exports = router;