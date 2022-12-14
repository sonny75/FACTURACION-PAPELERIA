const express = require('express');
const router = express.Router();

//Ruta para productos
const rutaProductos = require('./router_productos');
router.use('/productos',rutaProductos);

//Ruta para categorias
const rutaCategorias = require('./router_categorias');
router.use('/categorias',rutaCategorias);

//Ruta para productos en agregación con categorias
const rutaProductosCategorias = require('./router_productos_categorias');
router.use('/productoscategorias',rutaProductosCategorias);

//Ruta para productos en agregación con detalles del pedido
const rutaPedidosDetallePedidos= require('./router_pedidosdetalle_pedidos');
router.use('/pedidosdetallepedidos',rutaPedidosDetallePedidos);
// Ruta para Usuarios
const rutaUsuarios = require('./router_usuarios.js');
router.use('/usuarios',rutaUsuarios);
// Ruta para  Pedidos
const rutaPedidos= require('./router_pedidos');
router.use('/pedidos',rutaPedidos);

module.exports = router;



