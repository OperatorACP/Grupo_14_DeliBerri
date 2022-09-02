const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productosModel = jsonTable('productos');


module.exports = {
    index: (req, res) => {

        let productos = productosModel.all()

        res.render('products/index',  { productos });
    },
    show: (req, res) => {
        let all = productosModel.all()
        let product = all.find(product => product.id == req.params.id)
        return res.render('products/detail', { product });
    },
    create: (req, res) => {
        let categories = all.map(product => product.tipo).filter((element, index, array) => array.indexOf(element) !== index)
        return res.render('products/create',{ categoires });
    },
    store: (req, res) => {
        
        let groupId = productosModel.create({
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,    
            contenido: req.body.contenido,
            unidades: req.body.unidades,
            precio: req.body.precio,
            descuento: req.body.descuento,
            //imagen:  req.files.imagen,
        });

    return res.redirect('/productos/detalle/'+groupId);

    },
    edit: (req, res) => {
        let all = productosModel.all()
        let product = all.find(product => product.id == req.params.id)
        let categories = all.map(product => product.tipo).filter((element, index, array) => array.indexOf(element) !== index)
        return res.render('products/edit', { product,catagories });
    },
    update: (req, res) => {
        let producto = req.body;

        producto.id = req.params.id;

        let productoId = productosModel.update(producto); // crear metodo en el JSONTable // Usando el map y writeFileSync

        return res.redirect('/productos/detalle/' + producto.id)
    },
    destroy: (req, res) => {

       let all = productosModel.all()
       let product = all.find(product => product.id == req.params.id)
       let imagePath = path.join(__dirname, '../public/img/' + product.image);
        
        productosModel.delete(product.id); // crearla en el JSONTable // Usar filter y writeFileSync

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        return res.redirect('/productos')
    }
}
