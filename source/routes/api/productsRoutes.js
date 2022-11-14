const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api/productsController');

router.get('/', apiProductsController.index)
// router.get('/categories', apiProductsController.category)
// router.get('/status', apiProductsController.status)
// router.get("/lastproduct", apiProductsController.lastProduct);
// router.get('/:id', apiProductsController.detail)

module.exports = router;