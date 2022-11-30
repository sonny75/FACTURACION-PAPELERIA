const express = require('express');
const router = express.Router();
const modeloPedido = require('../models/model_pedidos');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloPedido.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloPedido.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Agregar un registro

router.post('/agregar',(req,res)=>{
    const miPedido = new modeloPedido({
        
        codigo : req.body.codigo,
        codusuario : req.body.codusuario,
        fecha : req.body.fecha,
        direccion : req.body.direccion,
        email : req.body.email,
        telefono : req.body.telefono,
        subtotal : req.body.subtotal,
        impuestos : req.body.impuestos,
        total : req.body.total,
        estado : req.body.estado
    })
    miPedido.save(function(err)
    {
        if(!err){res.send("El registro se agrego Exitosamente!!!");}
        else{res.send(err.stack);}
    })
})

//editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloPedido.findOneAndUpdate({codigo:req.params.codigo},
    {
        codusuario : req.body.codusuario,
        fecha : req.body.fecha,
        direccion : req.body.direccion,
        email : req.body.email,
        telefono : req.body.telefono,
        subtotal : req.body.subtotal,
        impuestos : req.body.impuestos,
        total : req.body.total,
        estado : req.body.estado
    }, 
        function(err)
        {
            if(!err){res.send("El registro se actualizo exitosamente!!");}
            else{res.send(err.stack);}
        })
})
//Borrar un registro
router.delete('/borrar/:codigo',(req,res)=>{
    modeloPedido.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino Exitosamente!!");}
            else{res.send(err.stack);}
        })
})
module.exports = router ;