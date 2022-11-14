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
  



  
  }
  
  
  module.exports = apiProductsController;


















