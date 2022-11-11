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

server.use(require("./routes/productsRoutes"));
server.use(require("./routes/usersRoutes"));
server.use(require("./routes/categoriesRoutes"));

// Ruta de Index

server.get("/", (req, res) => {
  return res.render(join(__dirname, "/views/index.ejs"));
});

// Rutas de /views/products

server.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "/views/sections/productDetail.ejs"));
});
server.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "/views/sections/productCart.ejs"));
});
server.get("/sale", (req, res) => {
  return res.render(join(__dirname, "/views/sections/sale.ejs"));
});
server.get("/wines", (req, res) => {
  return res.render(join(__dirname, "/views/sections/wines.ejs"));
});
server.get("/beers", (req, res) => {
  return res.render(join(__dirname, "/views/sections/beers.ejs"));
});
server.get("/spirits", (req, res) => {
  return res.render(join(__dirname, "/views/sections/spirits.ejs"));
});

server.get("/create", (req, res) => {
  return res.render(join(__dirname, "/views/sections/create.ejs"));
});

server.get("/edit", (req, res) => {
  return res.render(join(__dirname, "/views/sections/edit.ejs"));
});


