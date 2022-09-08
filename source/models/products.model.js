const { resolve } = require("path");
const fs = require("fs");

let model = {
  all: function () {
    let file = resolve(__dirname, "../data", "products.json");
    let data = fs.readFileSync(file);
    return JSON.parse(data);
  },
  one: function (sku) {
    let all = model.all();
    return all.find((e) => e.sku == sku);
  },
  generate: function (data) {
    let all = model.all();
    let last = all.pop();
    let product = {};
    product.bebida = data.bebida;
    product.marca = data.marca;
    product.content = parseInt(data.content);
    product.units = parseInt(data.units);
    product.sale = parseInt(data.sale);
    product.price = parseInt(data.price);
    product.description = data.description;
    product.homeservice = data.homeservice;
    product.image = data.image;
    product.sku = last.sku + 1;
    return product;
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "products.json");
    let json = JSON.stringify(data, null, 2);
    return fs.writeFileSync(file, json);
  },
};

module.exports = model;
