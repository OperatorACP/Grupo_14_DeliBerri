const db = require("../database/models");
const sequelize = db.sequelize;
const Products = db.products;

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
    db.category
      .create({
        name: req.body.name,
      })
      .then(() => {
        return res.redirect("/categorias");
      })
      .catch((error) => res.send(error));
  },

  edit: function (req, res) {
    const pedidoCategoria = db.category.findByPk(req.params.id);

    const pedidoDetalle = db.category.findAll();

    Promise.all([pedidoCategoria, pedidoDetalle]).then(function ([
      category,
      detalle,
    ]) {
      res.render("../views/categories/categoriesEdit", {
        category: category,
        detalle: detalle,
      });
    });
  },

  update: function (req, res) {
    console.log("req " + JSON.stringify(req.body));
    db.category
      .update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((a) => {
        console.log(a[0]);
        res.redirect(`/categorias/detalle/${req.params.id}`);
      });
  },

  delete: function (req, res) {
    db.category
      .findByPk(req.params.id)
      .then((category) => {
        return res.render(`../views/categories/categoriesDelete`, { category });
      })
      .catch((error) => res.send(error));
  },
  destroy: function (req, res) {
    db.category
      .destroy({ where: { id: req.params.id }, force: true })
      .then(() => {
        return res.redirect("/categorias");
      })
      .catch((error) => res.send(error));
  }

};

module.exports = categoriesController;
