const express = require('express');
const router = express.Router();
const controladorPedidosDetalle = require('../controllers/controller_pedidosdetalle');

router.get('/listar',controladorPedidosDetalle);
router.get('/cargar/:codigo',controladorPedidosDetalle);
router.post('/agregar',controladorPedidosDetalle);
router.post('/editar/:codigo',controladorPedidosDetalle);
router.delete('/borrar/:codigo',controladorPedidosDetalle);
module.exports = router;