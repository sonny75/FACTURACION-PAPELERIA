const express = require('express');
const router = express.Router();
const controladorDetallePedidos = require('../controllers/controller_detalle_pedidos');

router.get('/listar',controladorDetallePedidos);
router.get('/cargar/:codigo',controladorDetallePedidos);
router.post('/agregar',controladorDetallePedidos);
router.post('/editar/:codigo',controladorDetallePedidos);
router.delete('/borrar/:codigo',controladorDetallePedidos);
module.exports = router;