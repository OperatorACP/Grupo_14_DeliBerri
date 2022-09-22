const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const { join } = require("path");
const methodOverride = require("method-override");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

const server = express();

const { port, start } = require("./modules/server");
server.listen(port, start());


server.use(
  session({
    secret: "Shh, it's a secret!",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(cookies());

server.use(userLoggedMiddleware);

server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

const statics = require("./modules/static");
server.use(statics(join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(methodOverride("m"));

server.use(require("./routes/products.routes"));
server.use(require("./routes/users.routes"));

// Ruta de Index

server.get("/", (req, res) => {
  return res.render(join(__dirname, "/views/index.ejs"));
});

// Rutas de /views/products

server.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "/views/products/productDetail.ejs"));
});
server.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "/views/products/productCart.ejs"));
});
server.get("/sale", (req, res) => {
  return res.render(join(__dirname, "/views/products/sale.ejs"));
});
server.get("/wines", (req, res) => {
  return res.render(join(__dirname, "/views/products/wines.ejs"));
});
server.get("/beers", (req, res) => {
  return res.render(join(__dirname, "/views/products/beers.ejs"));
});
server.get("/spirits", (req, res) => {
  return res.render(join(__dirname, "/views/products/spirits.ejs"));
});

server.get("/create", (req, res) => {
  return res.render(join(__dirname, "/views/products/create.ejs"));
});

server.get("/edit", (req, res) => {
  return res.render(join(__dirname, "/views/products/edit.ejs"));
});

// Rutas de /views/users

server.get("/register", (req, res) => {
  return res.render(join(__dirname, "/views/users/register.ejs"));
});
server.get("/login", (req, res) => {
  return res.render(join(__dirname, "/views/users/login.ejs"));
});
