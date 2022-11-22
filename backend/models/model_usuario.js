const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaUsuario = new miesquema({
    cod_usuario : String,
    nombre :String,
    apellidos: String,
    identificacion : Number,
    email : String ,
    telefono : Number,
    contrasena : String
})
const modeloUsuario = mongoose.model('usuarios',esquemaUsuario);
// pedido:codigo,cod_usuario,fecha,estado,direccion,correo,telefono,subtotal,impuestos,total
//detalle pedido: codigo,cod_pedido,cod_producto,cantidad,valorunitario,valortotal
module.exports = modeloUsuario;