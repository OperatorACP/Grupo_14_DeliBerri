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
    },
    store: (req, res) => {

        let group = req.body;

        groupId = productosModel.create(group);

        res.redirect('/productos/' + groupId);
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
        
        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('productos/search', {});
    },
}