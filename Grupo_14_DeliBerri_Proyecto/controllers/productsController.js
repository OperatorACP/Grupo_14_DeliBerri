const db = require("../database/models");
const sequelize = db.sequelize;
const Category = db.category;
const {Op} = require('sequelize')

const productsController = {

  index: async (req, res) => {
    db.product.findAll({
        order: [["title", "ASC"]],
    }) 
       .then(products => {
           res.render('index', {products});
       console.log(products)}) 
       .catch(err => {
        res.send(err)

    })
},

  beers: async (req, res) => {
    db.product.findAll({
        order: [["title", "ASC"]],
    }) 
       .then(products => {
           res.render('main/beers', {products});
       console.log(products)}) 
       .catch(err => {
        res.send(err)

    })
},

wines: async (req, res) => {
  db.product.findAll({
      order: [["title", "ASC"]],
  }) 
     .then(products => {
         res.render('main/wines', {products});
     console.log(products)}) 
     .catch(err => {
      res.send(err)

  })
},


liquors: async (req, res) => {
  db.product.findAll({
      order: [["title", "ASC"]],
  }) 
     .then(products => {
         res.render('main/spirits', {products});
     console.log(products)}) 
     .catch(err => {
      res.send(err)

  })
},


promotions: async (req, res) => {
  db.product.findAll({
      order: [["title", "ASC"]],
  }) 
     .then(products => {
         res.render('main/sale', {products});
     console.log(products)}) 
     .catch(err => {
      res.send(err)

  })
},

refrescos: async (req, res) => {
  db.product.findAll({
      order: [["title", "ASC"]],
  }) 
     .then(products => {
         res.render('main/refrescos', {products});
     console.log(products)}) 
     .catch(err => {
      res.send(err)

  })
},



  list: async (req, res) => {
    db.product.findAll({
        order: [["title", "ASC"]],
    }) 
       .then(products => {
           res.render('products/productsList', {products});
       console.log(products)}) 
       .catch(err => {
        res.send(err)

    })
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
        image: req.files ? req.files[0].filename : null,
        description: req.body.description,
        promotion: req.body.promotion,
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
    db.product.update(
        {
          title: req.body.title,
          price: req.body.price,
          image: req.files ? req.files[0].filename : null,
          description: req.body.description,
          promotion: req.body.promotion,
          category_id: req.body.interestCategory
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

	search: (req, res) =>{
		db.product.findAll({
			where:{
				title: {[Op.like] : "%" + req.body.title + "%"}
			}
		})
			.then(products => {
				res.render("products/productsSearchResult", {products})
			})
			.catch(err => {
                res.send(err)
            })
	}
  
};

module.exports = productsController;
