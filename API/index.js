const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/db')
    // crer el servidor
const app = express()
    //Conexion a la BD
conectarDB()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.use('/api/agencias', require('./routes/agencyRoute'))
app.use('/api/docentes', require('./routes/docenteRoute'))
app.use('/api/facultades', require('./routes/facultadRoute'))
app.use('/api/tipoPermiso', require('./routes/tipoPermisoRoute'))
app.use('/api/permisos', require('./routes/permisoRoute'))
app.use('/api/cursos', require('./routes/courseRoute'))
app.use('/api/peliculas', require('./routes/peliculaRoute'))



app.listen(4500, () => {
    console.log('El servidor se esta ejecutando')

})