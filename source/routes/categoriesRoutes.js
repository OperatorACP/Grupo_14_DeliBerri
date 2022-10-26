const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/categorias", categoriesController.list);
router.get("/categorias/detalle/:id", categoriesController.detail);
router.get("/categorias/add", categoriesController.add);
router.post("/categorias/create", categoriesController.create);
router.put("/categorias/update", categoriesController.update);
//router.get("/categorias/edit/:id", categoriesController.edit);//
//router.get("/categorias/delete/:id", categoriesController.delete);//
//router.delete("/categorias/delete/:id", categoriesController.destroy);//

module.exports = router;

