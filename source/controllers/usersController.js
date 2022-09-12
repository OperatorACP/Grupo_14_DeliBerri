const fs = require('fs');
const { userInfo } = require('os');
const path = require('path');
const User = require('../models/user')
const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')

const userController = {
  register : (req, res) => {
    return res.render('users/register')
  },

  processingRegister : (req,res) => {
    const resultValidation = validationResult(req);

if (resultValidation.errors.length > 0) {
  return res.render('register', {
    errors: resultValidation.mapped(),
    oldData : req.body
  });

}

 let userToCreate = {
 ...req.body,
password: bcryptjs.hashSync(req.body.password, 10),
 avatar: req.file? req.file.filename : null
 }
 delete userToCreate.confirm_password
 User.create(userToCreate);

return res.redirect('/login')

  },
  login: (req, res) => {
    return res.render('users/login')
  },

  profile: (req, res) => {
    return res.render() //Falta crear vista de perfil
  }
}


module.exports = userController;