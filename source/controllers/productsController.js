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
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        promotion: req.body.promotion,
        image: req.body.image,
       })
       .then(() => {
         return res.redirect("/productos");
       })
       .catch((error) => res.send(error));
   },
 
   edit: function (req, res) {
     const pedidoProducto = db.product.findByPk(req.params.id);
 
     const pedidoDetalle = db.product.findAll();
 
     Promise.all([pedidoProducto, pedidoDetalle]).then(function ([
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
           title: req.body.title,
         },
         {
           where: {
             id: req.params.id,
           },
         }
       )
       .then((a) => {
         console.log(a[0]);
         res.redirect(`/products/detalle/${req.params.id}`);
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
 

