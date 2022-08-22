const router = require("../app");
const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get('/', function(req,res,next){
    res.send('Respond with a Resource');
});


router.get('/', productController.register)

router.get('/create', productController.login);

router.get('/:id', productController.list);

router.post('/', productController.list);

router.get('/:id/edit', productController.list);

router.put('/:id', productController.list);

router.delete('/:id', productController.list);

module.exports= router;
