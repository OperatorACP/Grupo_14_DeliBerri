const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get('/', productController.index); // /productos/ href

router.get('/crear', productController.create); // /productos/crear href

router.get('/detalle/:id', productController.show); // /productos/detalle/:id href

router.get('/editar/:id', productController.edit); // /productos/editar/:id  href

router.post('/guardar', productController.store); // /productos/guardar Multer action

router.put('/:id', productController.update); // /productos/:id?m=PUT Multer action

router.delete('/:id', productController.destroy); // /productos/:id?m=DELETE action

module.exports= router;
