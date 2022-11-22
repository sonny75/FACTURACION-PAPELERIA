const express = require('express');
const router = express.Router();

//Rutas para el controlador de pedidos
const controladorPedidosDetallePedidos = require('../controllers/controller_pedidos_detalle_pedidos');
router.get('/listar',controladorPedidosDetallePedidos);
router.get('/listar/:codigo',controladorPedidosDetallePedidos);

module.exports = router;