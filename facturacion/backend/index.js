const express = require('express');
const app = express();

//Conexión con la base de datos
const miconexion = require('./connect');

//Importo el body parser para uso de formato JSON en las peticiones
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Importar las rutas
const rutas = require('./routers/routers');
app.use('/api',rutas);

//Peticion get por defecto
app.get('/', (req, res) => {
    res.end("Servidor Backend OK!")
})

//Servidor 
app.listen(process.env.PORT || 5000, function()
{
    console.log("Servidor OK en puerto 5000 - http://localhost:5000")
})