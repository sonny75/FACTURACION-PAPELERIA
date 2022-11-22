
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/facturacion');
const miconexion = mongoose.connection

miconexion.on('connected', ()=>{console.log('Conexion exitosa!')})
miconexion.on('error', ()=>{console.log('Error de conexion')})

module.exports = mongoose
