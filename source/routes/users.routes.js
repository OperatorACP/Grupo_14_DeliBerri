const router = require("../../app");
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/', function(req,res,next){
    res.send('Respond with a Resource');
});


// Falta completar con codigo