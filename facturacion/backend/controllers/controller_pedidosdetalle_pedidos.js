const express = require('express');
const router = express.Router();
const modeloPedidoDetalle = require('../models/model_pedidodetalle');
const modeloPedido = require('../models/model_pedidos');

router.get('/listar',(req, res)=>{
        modeloPedido.aggregate([
        {
            $lookup: 
            {
                localField : "codigo",
                from : "pedidosdetalle",
                foreignField : "codpedido",
                as : "pedidosdetalle_pedidos",
            },
        },
        {$unwind : "$pedidosdetalle_pedidos"}
    ])
    .then((result)=>{res.send(result); console.log(result);})
    .catch((error)=>{res.send(error); console.log(error);})
});


router.get('/listar/:codigo',(req, res)=>{
    var dataPedidos = [];
    modeloPedido.find({codigo:req.params.codigo}).then(data => {
        console.log("Datos del pedido");
        console.log(data);
        //res.send(data);
        data.map((d,k)=>{
            dataPedidos.push(d.codigo);
            modeloPedidoDetalle.find({codpedido:{$in: dataPedidos}})
            .then(data=>{
                console.log("Detalles del pedido");
                console.log(data);
                res.send(data);
            })
            .catch((error)=>{
                console.log(error);
            })
        });
    })
})
module.exports = router;