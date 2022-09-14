const { all, one, generate, write } = require("../models/products.model");
const { unlinkSync } = require("fs");
const { resolve } = require("path");

const controller = {
  index: (req, res) => {
    let products = all();

    if (req.params.categoria) {
      products = products.filter((e) => e.category == req.params.categoria);
      return res.render("products/list", { products });
    }

    return res.render("products/list", { products });
  },
  show: (req, res) => {
    let product = one(req.params.producto);
    if (product) {
      return res.render("products/detail", { product });
    }
    return res.render("products/detail", { product: null });
  },
  create: (req, res) => {
    return res.render("products/create");
  },
  save: (req, res) => {
    req.body.image =
      req.files && req.files.length > 0 ? req.files[0].filename : "default.png";

    let nuevo = generate(req.body);
    let todos = all();
    todos.push(nuevo);
    write(todos);
    return res.redirect("/productos/");
  },
  edit: (req, res) => {
    let product = one(req.params.producto);
    return res.render("products/edit", { product });
  },
  update: (req, res) => {
    let todos = all();
    let actualizados = todos.map((element) => {
      if (element.sku == req.body.sku) {
        element.bebida = req.body.bebida;
        element.marca = req.body.marca;
        element.description = req.body.description;
        element.content = parseInt(req.body.content);
        element.units = parseInt(req.body.units);
        element.sale = parseInt(req.body.sale);
        element.price = parseInt(req.body.price);
        element.homeservice = req.body.homeservice;
        element.image =
          req.files && req.files.length > 0
            ? req.files[0].filename
            : element.image;
      }
      return element;
    });
    write(actualizados);
    return res.redirect("/productos/");
  },
  remove: (req, res) => {
    let product = one(req.body.sku);
    if (product.image != "default.png") {
      let file = resolve( __dirname,"..","..", "public","products",product.image);
      unlinkSync(file);
    }
    let todos = all();
    let noEliminados = todos.filter((element) => element.sku != req.body.sku);
    write(noEliminados);
    return res.redirect("/productos/");
  },
};

module.exports = controller;
