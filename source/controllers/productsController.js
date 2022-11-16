const db = require("../database/models");
const sequelize = db.sequelize;
const Category = db.category;

const productsController = {
  list: (req, res) => {
    db.product.findAll().then((product) => {
      res.render("products/productsList", { product });
    });
  },

  detail: (req, res) => {
    db.product.findByPk(req.params.id).then((product) => {
      res.render("products/productsDetail", { product });
    });
  },

  add: (req, res) => {
    db.product.findAll().then((product) => {
      res.render("products/productsAdd", { product });
    });
  },

  create: function (req, res) {
    db.product
      .create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        promotion: req.body.promotion,
        image: req.files[0].filename,
        category_id: req.body.interestCategory,
      })
      .then(() => {
        return res.redirect("/productos");
      })
      .catch((error) => res.send(error));
  },

  edit: function (req, res) {
    const pedidoProducto = db.product.findByPk(req.params.id);

    const pedidoDetalleProducto = db.product.findAll();

    Promise.all([pedidoProducto, pedidoDetalleProducto]).then(function ([
      product,
      detalle,
    ]) {
      res.render("../views/products/productsEdit", {
        product: product,
        detalle: detalle,
      });
    });
  },

  update: function (req, res) {
    db.product
      .update(
        {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
          promotion: req.body.promotion,
         //  image: req.files[0].filename, <-- NO FUNCIONA
          category_id: req.body.interestCategory,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() => {
        res.redirect(`/productos/detalle/${req.params.id}`);
      });
  },

  delete: function (req, res) {
    db.product
      .findByPk(req.params.id)
      .then((product) => {
        return res.render(`../views/products/productsDelete`, { product });
      })
      .catch((error) => res.send(error));
  },

  destroy: function (req, res) {
    db.product
      .destroy({ where: { id: req.params.id }, force: true })
      .then(() => {
        return res.redirect("/productos");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = productsController;
