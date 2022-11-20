const { join } = require("path");
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const authMiddleware = require("../middlewares/authMiddleware");

/* INDEX */

router.get("/", productsController.index);


/* BEERS */

router.get("/beers", productsController.beers);

/* WINES */

router.get("/wines", productsController.wines);

/* LICORES */

router.get("/spirits", productsController.liquors);

/* PROMOCIONES */

router.get("/sale", productsController.promotions);

/* REFRESCOS */

router.get("/refrescos", productsController.refrescos);

// CARRITO DE COMPRAS

router.get("/productCart", authMiddleware);

router.get("/sale", (req, res) => {
  return res.render(join(__dirname, "../views/main/sale.ejs"));
});
router.get("/wines", (req, res) => {
  return res.render(join(__dirname, "../views/main/wines.ejs"));
});
 router.get("/beers", (req, res) => {
  return res.render(join(__dirname, "../views/main/beers.ejs"));
});
router.get("/spirits", (req, res) => {
  return res.render(join(__dirname, "../views/main/spirits.ejs"));
});

router.get("/refrescos", (req, res) => {
  return res.render(join(__dirname, "../views/main/refrescos.ejs"));
});

router.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "../views/main/productDetail.ejs"));
});
router.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "../views/main/productCart.ejs"));
});

module.exports = router;
