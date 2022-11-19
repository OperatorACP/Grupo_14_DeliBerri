const express = require("express");
const path = require("path");
const upload = require("../middlewares/multerMiddleware");
const router = express.Router();
const productsController = require("../controllers/productsController");
const authMiddleware = require("../middlewares/authMiddleware");
const validationsMiddlewareProducts = require("../middlewares/validationsMiddlewareProducts");


//CRUD//

// CREATE //
router.get("/productos/add", authMiddleware, productsController.add);
router.post(
  "/productos/create", upload.any("image"), validationsMiddlewareProducts, authMiddleware, productsController.create
);

// READ //
router.get("/productos", authMiddleware, productsController.list);
router.get("/productos/detalle/:id", productsController.detail);

// UPDATE //
router.get("/productos/edit/:id", authMiddleware, productsController.edit);
router.post("/productos/edit/:id",upload.any('image'), authMiddleware,  validationsMiddlewareProducts,  productsController.update);

// DELETE //
router.get("/productos/delete/:id", authMiddleware, productsController.delete);
router.post("/productos/delete/:id", authMiddleware, productsController.destroy);

// SEARCH //

router.post("/search", productsController.search);


module.exports = router;