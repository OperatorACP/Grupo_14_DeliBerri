const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productosModel = jsonTable('productos');


module.exports = {
    index: (req, res) => {

        let productos = productosModel.all()

        res.render('productos/index',  { productos });
    },
    create: (req, res) => {
        res.render('productos/create');
        res.render(path.resolve(__dirname, '../views/products/create.ejs'));
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

    return res.send(groupId);

    },
    edit: (req, res) => {
        let group = productosModel.find(req.params.id)
        let categories = categoriesModel.all();

        res.render('productos/edit', { group, categories });
    },
    update: (req, res) => {
        let group = req.body;

        group.id = req.params.id;

        groupId = productosModel.update(group);

        res.redirect('/productos/' + groupId)
    },
    show: (req, res) => {
        let group = productosModel.find(req.params.id);

        res.render('productos/detail', { group });
    },
    destroy: (req, res) => {

        let group = productosModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/' + group.image);
        
        productosModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/productos')
    },
    search: (req, res) => {
        
        // Traigo todos los productos

        // Filtro los productos

        // Envío los productos y lo que busca el usuario a la vista

        res.render('productos/search', {});
    },
}