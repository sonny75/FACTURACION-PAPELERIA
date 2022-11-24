const express = require('express');
const router = express.Router();
const modeloPedidosDetalle = require('../models/model_pedidodetalle');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloPedidosDetalle.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloPedidosDetalle.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{ress.send(err);}
    })
})

//Agregar un registro

router.post('/agregar',(req,res)=>{
    const miPedidosDetalle = new modeloPedidosDetalle({
        codigo : req.body.codigo,
        codpedido : req.body.codpedido,
        codproducto : req.body.codproducto,
        cantidad : req.body.cantidad,
        valorunitario: req.body.valorunitario, 
        valortotal : req.body.valortotal
    })
    miPedidosDetalle.save(function(err)
    {
        if(!err){res.sed("El registro se agrego Exitosamente!!!");}
        else{res.sed(err.stack);}
    })
})

//editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloPedidosDetalle.findOneAndUpdate({codigo:req.params.codigo},
    {
        codpedido : req.body.codpedido, 
        codproducto : req.body.codproducto,
        cantidad : req.body.cantidad,
        valorunitario: req.body.valorunitario, 
        valortotal : req.body.valortotal
    }, 
        function(err)
        {
            if(!err){res.send("El registro se actualizo exitosamente!!");}
            else{res.send(err.stack);}
        })
})
//Borrar un registro
router.delete('/borrar/:codigo',(req,res)=>{
    modeloPedidosDetalle.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino Exitosamente!!");}
            else{res.send(err.stack);}
        })
})
module.exports = router ;