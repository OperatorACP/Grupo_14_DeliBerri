const express = require("express");
const path = require("path");
const upload = require("../middlewares/multerMiddlewareProduct");
const router = express.Router();
const productsController = require("../controllers/productsController");
const authMiddleware = require("../middlewares/authMiddleware");
const validationsMiddlewareProducts = require("../middlewares/validationsMiddlewareProducts");

//CRUD//

// CREATE //
router.get("/productos/add", authMiddleware, productsController.add);
router.post(
  "/productos/create", authMiddleware, validationsMiddlewareProducts, upload.any(), productsController.create
);

// READ //
router.get("/productos", productsController.list);
router.get("/productos/detalle/:id", productsController.detail);

// UPDATE //
router.get("/productos/edit/:id", authMiddleware, productsController.edit);
router.post("/productos/edit/:id", authMiddleware, validationsMiddlewareProducts, upload.any(), productsController.update);

// DELETE //
router.get("/productos/delete/:id", productsController.delete);
router.post("/productos/delete/:id", productsController.destroy);

module.exports = router;