//Rutas para el esquema de Curso
const express = require('express')
const router = express.Router()
const peliculaController = require('../controllers/peliculaController')

//api/cursos
router.post('/', peliculaController.addPelicula)
router.get('/',peliculaController.loadPeliculas)
router.put('/:id',peliculaController.updatePelicula)
router.get('/:id',peliculaController.loadPelicula)
router.delete('/:id',peliculaController.deletePelicula)

module.exports = router