const db = require("../database/models/index.js")
const list = (req, res) => {
   const all = db.product.findAll()
   const succes = data => res.render('products/list',{genres:data})
   const error = error => res.send(error)
   return all.then(succes).catch(error)
}

module.exports = {list};


