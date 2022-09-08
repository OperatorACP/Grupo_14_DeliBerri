const express = require("express");
const { join } = require("path");
const methodOverride = require("method-override");
const server = express();
const { port, start } = require("./modules/server");
server.listen(port, start());

server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

const statics = require("./modules/static");
server.use(statics(join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(methodOverride("m"));

server.use(require("./routes/products.routes"));

// ¿¿¿ ???

server.get("/", (req, res) => {
  return res.render(join(__dirname, "/views/index.ejs"));
});
server.get("/register", (req, res) => {
  return res.render(join(__dirname, "/views/users/register.ejs"));
});
server.get("/login", (req, res) => {
  return res.render(join(__dirname, "/views/users/login.ejs"));
});
server.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "/views/users/productDetail.ejs"));
});
server.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "/views/users/productCart.ejs"));
});
server.get("/sale", (req, res) => {
  return res.render(join(__dirname, "/views/users/sale.ejs"));
});
server.get("/wines", (req, res) => {
  return res.render(join(__dirname, "/views/users/wines.ejs"));
});
server.get("/beers", (req, res) => {
  return res.render(join(__dirname, "/views/users/beers.ejs"));
});
server.get("/spirits", (req, res) => {
  return res.render(join(__dirname, "/views/users/spirits.ejs"));
});



