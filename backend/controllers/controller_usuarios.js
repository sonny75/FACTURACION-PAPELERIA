const express = require('express');
const router = express.Router();
const modeloUsuario = require('../models/model_usuario');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloUsuario.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloUsuario.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{ress.send(err);}
    })
})

//Agregar un registro

router.post('/agregar',(req,res)=>{
    const miUsuario = new modeloUsuario({
       cod_usuario : req.body.id_usuario,
       nombre : req.body.nombre,
       apellido : req.body.apellido,
       identificacion : req.body.identificacion,
       email : req.body.email,
       telefono : req.body.telefono,
       contraseña : req.body.contraseña
    })
    miUsuario.save(function(err)
    {
        if(!err){res.sed("El registro se agrego Exitosamente!!!");}
        else{res.sed(err.stack);}
    })
})

//editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloUsuario.findOneAndUpdate({codigo:req.params.codigo},
    {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        identificacion : req.body.identificacion,
        email : req.body.email,
        telefono : req.body.telefono,
        contrasena : req.body.contrasena
    }, 
        function(err)
        {
            if(!err){res.send("El registro se actualizo exitosamente!!");}
            else{res.send(err.stack);}
        })
})
//Borrar un registro
router.delete('/borrar/:codigo',(req,res)=>{
    modeloUsuario.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino Exitosamente!!");}
            else{res.send(err.stack);}
        })
})
module.exports = router ;