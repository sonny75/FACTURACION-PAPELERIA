const express = require('express');
const router = express.Router();

//Ruta para productos
const rutaProductos = require('./router_productos');
router.use('/productos',rutaProductos);

//Ruta para categorias
const rutaCategorias = require('./router_categorias');
router.use('/categorias',rutaCategorias);
//Ruta Carrito
const rutaPedidos = require('./router_pedidos');
router.use('/pedidos',rutaPedidos);

// Ruta para Usuarios
const rutaUsuarios = require('./router_usuarios');
router.use('/usuarios',rutaUsuarios);

// Ruta para Detalle Pedidos
const rutaPedidosDetalle = require('./router_pedidosdetalle');
router.use('/pedidosdetalle',rutaPedidosDetalle);

//Ruta para productos en agregación con categorias
const rutaProductosCategorias = require('./router_productos_categorias');
router.use('/productoscategorias',rutaProductosCategorias);

//Ruta para pedidos con detalle pedidos
const rutaPedidosDetallePedidos = require('./router_pedidosdetalle_pedidos');
router.use('/pedidosdetallepedidos',rutaPedidosDetallePedidos);


module.exports = router;



