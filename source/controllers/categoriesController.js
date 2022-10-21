const db = require("../database/models");
const sequelize = db.sequelize;

const Products = db.products;
const Users = db.users;

const categoriesController = {
  list: (req, res) => {
    db.category.findAll().then((category) => {
      res.render("categories/categoriesList", { category });
    });
  },
  detail: (req, res) => {
    db.category.findByPk(req.params.id).then((category) => {
      res.render("categories/categoriesDetail", { category });
    });
  },

  add: (req, res) => {
    db.category.findAll().then((category) => {
      res.render("categories/categoriesAdd", { category });
    });
  },
  create: function (req, res) {
    db.category.create({
        name: req.body.name,
      })
      .then(() => {
        return res.redirect("/categorias");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = categoriesController;
