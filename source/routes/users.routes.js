const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/login', usersController.login ); // href /usuarios/login
router.get('/register', usersController.register ); // href /usuarios/register
router.post('/access', usersController.access ); // action /usuarios/access
router.post('/save', usersController.save ); // action /usuarios/save


module.exports = router
