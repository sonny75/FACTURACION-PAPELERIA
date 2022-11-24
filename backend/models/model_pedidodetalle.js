const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaPedidoDetalle = new miesquema({
    codigo : String,
    codpedido : String,
    codproducto : String,        
    valorunitario : Number,
    cantidad : Number,
    valortotal : Number
})

const modeloPedidosDetalle = mongoose.model('pedidosdetalle',esquemaPedidoDetalle);

module.exports = modeloPedidosDetalle;
