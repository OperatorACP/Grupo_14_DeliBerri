const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('users');

module.exports = {
  login: (req,res) => res.render('users/login'),
  register: (req,res) => res.render('users/register'),
  access: (req,res) =>{
      // Buscar al usuario en la base de datos
      // Inicio de Session
      return res.redirect('/'),
  },
  save: (req,res) =>{
    // guardar al usuario en el json de usuarios
    return res.redirect('/usuarios/login')
  } 
}
