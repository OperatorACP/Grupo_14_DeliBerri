const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');

const usersModel = jsonTable('users');

module.exports = {
    index: (req, res) => {

        let users = usersModel.all()

        res.render('users/index',  { users });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {

        let group = req.body;

        groupId = usersModel.create(group);

        res.redirect('/users/' + groupId);
    },
    edit: (req, res) => {
        let group = usersModel.find(req.params.id)
        let categories = categoriesModel.all();

        res.render('users/edit', { group, categories });
    },
    update: (req, res) => {
        let group = req.body;

        group.id = req.params.id;

        groupId = usersModel.update(group);

        res.redirect('/users/' + groupId)
    },
    show: (req, res) => {
        let group = usersModel.find(req.params.id);

        res.render('users/detail', { group });
    },
    destroy: (req, res) => {

        let group = usersModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/' + group.image);
        
        usersModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/users')
    },
    search: (req, res) => {
        
        // Traigo todos los users

        // Filtro los users

        // Envío los users y lo que busca el usuario a la vista

        res.render('users/search', {});
    },
}