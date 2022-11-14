const db = require("../../database/models")




const apiProductsController= {

    index: (req, res) => {
    db.product.findAll()
       .then(products => {
           return res.status(200).json({
        count: products.length,
        status: 200,
        products: products,
        //countByCategory:
         })
       })
       .catch(err => {
      res.send(err)
    })
  },
  
  detail: (req, res) => {
    db.product.findByPk(req.params.id, {
        /*include: [{association: "status"}, {association: "categories"}]*/
    })
    .then(product => {
        return res.status(200).json({
         url: product.image, 
         status: 200,   
         product: product,
         
        })
    })
   .catch(err => {
    res.send(err)
})
},
category: (req, res) => {
    db.category.findAll()
    .then(categories => {
        return res.status(200).json({
            count: categories.length,
            categories: categories,
        })
    })
},

lastProduct: (req, res) => {

    db.product.findAll({
        // include: ["Category"],
        order: [
            ["id", "DESC"],
        ],
        limit: 1
    })
        .then(product => {
            return res.status(200).json({
                url: product.image, 
                status: 200,   
                product: product,
                
               })
           
        })
        .catch(err => {
            res.send(err)
        })

}


  }
  
  
  module.exports = apiProductsController;


















