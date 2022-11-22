const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaDetallePedidos = new miesquema({
    codigo : String,
    cod_pedido :String,
    cod_producto: String,
    cantidad : Number ,
    valorunitario: Number,
    valortotal: Number
})
const modeloDetallePedidos = mongoose.model('detalle_pedidos',esquemaDetallePedidos);
// pedido:codigo,cod_usuario,fecha,estado,direccion,correo,telefono,subtotal,impuestos,total
//detalle pedido: codigo,cod_pedido,cod_producto,cantidad,valorunitario,valortotal
module.exports = modeloDetallePedidos;