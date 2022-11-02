const db = require("../database/models")
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
         name: req.body.name,
       })
       .then(() => {
         return res.redirect("/categorias");
       })
       .catch((error) => res.send(error));
   },
 
   edit: function (req, res) {
     const pedidoCategoria = db.product.findByPk(req.params.id);
 
     const pedidoDetalle = db.product.findAll();
 
     Promise.all([pedidoCategoria, pedidoDetalle]).then(function ([
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
     console.log("req " + JSON.stringify(req.body));
     db.product
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
         return res.redirect("/categorias");
       })
       .catch((error) => res.send(error));
   }
 
 };
 
 module.exports = productsController;
 

