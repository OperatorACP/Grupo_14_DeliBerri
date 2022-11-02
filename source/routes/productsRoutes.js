const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");



//CRUD//

// CREATE //
router.get("/productos/add", productsController.add);
router.post("/productos/create", productsController.create);

// READ //
router.get("/productos", productsController.list);
router.get("/productos/detalle/:id", productsController.detail);

// UPDATE //
router.get("/productos/edit/:id", productsController.edit);
router.post("/productos/edit/:id", productsController.update);

// DELETE //
router.get("/productos/delete/:id", productsController.delete);
router.post("/productos/delete/:id", productsController.destroy);


module.exports = router;
