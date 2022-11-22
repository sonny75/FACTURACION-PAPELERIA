const express = require('express');
const router = express.Router();
const modeloDetallePedidos = require('../models/model_detalle_pedidos');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloDetallePedidos.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloDetallePedidos.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{ress.send(err);}
    })
})

//Agregar un registro

router.post('/agregar',(req,res)=>{
    const miDetallePedidos = new modeloDetallePedidos({
        codigo : req.body.codigo,
       
        cod_pedido : req.body.cod_pedido,
        cod_producto : req.body.cod_producto,
        cantidad : req.body.cantidad,
        valorunitario: req.body.valorunitario, 
        valortotal : req.body.valortotal
    })
    miDetallePedidos.save(function(err)
    {
        if(!err){res.sed("El registro se agrego Exitosamente!!!");}
        else{res.sed(err.stack);}
    })
})

//editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloDetallePedidos.findOneAndUpdate({codigo:req.params.codigo},
    {
        cod_pedido : req.body.cod_pedido,
        
        cod_producto : req.body.cod_producto,
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
    modeloDetallePedidos.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino Exitosamente!!");}
            else{res.send(err.stack);}
        })
})
module.exports = router ;