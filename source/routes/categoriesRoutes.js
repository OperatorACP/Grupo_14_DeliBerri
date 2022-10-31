const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");




router.get("/categorias/add", categoriesController.add);
router.post("/categorias/create", categoriesController.create);

router.get("/categorias", categoriesController.list);
router.get("/categorias/detalle/:id", categoriesController.detail);


router.get("/categorias/edit/:id", categoriesController.edit);
router.post("/categorias/edit/:id", categoriesController.update);


router.delete("/categorias/destroy/:id", categoriesController.destroy);






module.exports = router;

