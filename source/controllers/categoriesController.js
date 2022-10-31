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
    db.category.create({
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

   Promise.all([pedidoCategoria, pedidoDetalle])
   .then(function([category, detalle]){
res.render('../views/categories/categoriesEdit', {category:category,detalle:detalle })
   })
  },

  update : function(req,res) {
    db.category.update({
      name: req.body.name,
      id: req.body.id
    }, {
      where: {
        id: req.params.id
      }
    });
   res.redirect("/categorias");
 },
 
  delete : function(req,res) {
     db.category.destroy({
         where: {
          id: req.params.id ,
         },
       });
       res.redirect("/categorias");
       const success = updateded => console.log(updateded);
      const error = (error) => console.log(error);
       return selected.then(successSelected).then(success).catch(error);
  },
 
};

module.exports = categoriesController;

 //UPDATE//

//  const update = function() {

//  const selected = db.category.findByPk(13)
  
//          const successSelected = (data) => db.category.update({
//           name: 'Tu hermana'
//        },{
//           where: {
//              id: data.id
//          }
//        })
//          const success = updateded => console.log(updateded);
//          const error = (error) => console.log(error);
//          return selected.then(successSelected).then(success).catch(error);
//    }

//  update()

// //    //DESTROY//

//  const destroy =  function(req,res) {
//     db.category.destroy({
//         where: {
//           id: 3,
//         },

//       });
//  }


//  destroy()

 






