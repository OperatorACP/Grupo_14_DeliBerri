const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

//CRUD//

// CREATE //
router.get("/categorias/add", categoriesController.add);
router.post("/categorias/create", categoriesController.create);

// READ //
router.get("/categorias", categoriesController.list);
router.get("/categorias/detalle/:id", categoriesController.detail);

// UPDATE //
router.get("/categorias/edit/:id", categoriesController.edit);
router.post("/categorias/edit/:id", categoriesController.update);

// DELETE //
router.delete("/categorias/delete//:id", categoriesController.delete);






module.exports = router;

