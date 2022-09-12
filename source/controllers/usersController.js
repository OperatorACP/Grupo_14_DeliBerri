const fs = require('fs');
const { userInfo } = require('os');
const path = require('path');
const User = require('../models/user')
const {validationResult} = require('express-validator')


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
req.body.avatar = req.file? req.file.filename : null

  User.create(req.body)
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