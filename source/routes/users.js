const router = require("../app");
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/', function(req,res,next){
    res.send('Respond with a Resource');
});



// Todos los grupos
router.get('/', usersController.register)

// Formulario de creación
router.get('/create', usersController.login);

// Detalle de un grupo
router.get('/:id', usersController.list);

router.post('/', usersController.list);

// Edicion del detalle de un grupo
router.get('/:id/edit', usersController.list);

router.put('/:id', usersController.list);

//Eliminar Detalle
router.delete('/:id', usersController.list);

module.exports= router;

