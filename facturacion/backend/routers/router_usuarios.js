const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../controllers/controller_usuarios');

router.get('/listar',controladorUsuarios);
router.get('/cargar/:codigo',controladorUsuarios);
router.post('/agregar',controladorUsuarios);
router.post('/editar/:codigo',controladorUsuarios);
router.delete('/borrar/:codigo',controladorUsuarios);

module.exports = router;