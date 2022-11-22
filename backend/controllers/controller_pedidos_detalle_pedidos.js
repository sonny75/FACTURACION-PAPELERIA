const express = require('express');
const router = express.Router();
const modeloPedidos = require('../models/model_pedidos');
const modeloDetallePedidos = require('../models/model_detalle_pedidos');

router.get('/listar',(req, res)=>{
        modeloDetallePedidos.aggregate([
        {
            $lookup: 
            {
                localField : "codigo",
                from : "pedidos",
                foreignField : "cod_pedido",
                as : "pedidos_detalle_pedidos",
            },
        },
        {$unwind : "$pedidos_detalle_pedidos"}
    ])
    .then((result)=>{res.send(result); console.log(result)})
    .catch((error)=>{res.send(error); console.log(error)})
})


router.get('/listar/:codigo',(req, res)=>{
    var dataPedidos = [];
    modeloPedidos.find({codigo:req.params.codigo}).then(data => {
        console.log("Datos de los Pedidos");
        console.log(data);
        //res.send(data);
        data.map((d,k)=>{
            dataPedidos.push(d.codigo);
            modeloDetallePedidos.find({coddetallepedidos:{$in: dataPedidos}}).then(data=>{
                console.log("Detalles del Pedido");
                console.log(data);
                res.send(data);
            })
            .catch((error)=>{res.send(error); console.log(error);})
        });
    })
})

module.exports = router;