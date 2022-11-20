const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const authMiddleware = require("../middlewares/authMiddleware");

//CRUD//

// CREATE //
router.get("/categorias/add", authMiddleware, categoriesController.add);
router.post("/categorias/create", authMiddleware, categoriesController.create);

// READ //
router.get("/categorias", categoriesController.list);
router.get("/categorias/detalle/:id", categoriesController.detail);

// UPDATE //
router.get("/categorias/edit/:id", authMiddleware, categoriesController.edit);
router.post("/categorias/edit/:id", authMiddleware, categoriesController.update);

// DELETE //
router.get("/categorias/delete/:id", categoriesController.delete);
router.post("/categorias/delete/:id", categoriesController.destroy);






module.exports = router;

