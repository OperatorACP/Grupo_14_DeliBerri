const { join } = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render(join(__dirname, "../views/index.ejs"));
});

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

router.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "../views/main/productDetail.ejs"));
});
router.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "../views/main/productCart.ejs"));
});

module.exports = router;
