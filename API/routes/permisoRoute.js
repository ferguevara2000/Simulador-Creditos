//Rutas para el modulo de agencias
const express = require('express');
const router = express.Router();
const permisoController = require('../controllers/permisoController');

//api/agencies
router.post('/', permisoController.addPermiso);
router.get('/', permisoController.loadPermisos);
router.get('/:id', permisoController.loadPermiso);
router.put('/:id', permisoController.updatePermiso);
router.delete('/:id', permisoController.deletePermiso);

module.exports = router;