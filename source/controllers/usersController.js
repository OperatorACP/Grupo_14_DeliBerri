const fs = require('fs');
const { userInfo } = require('os');
const path = require('path');
const User = require('../models/user')

const controller = {
  register : (req, res) => {
    return res.render('users/register')
  },

  login: (req, res) => {
    return res.render('users/login')
  },

  profile: (req, res) => {
    return res.render() //Falta crear vista de perfil
  },

  processingRegister : (req,res) => {
    const resultValidation = validationResult(req);
if (resultValidation.errors.length > 0) {
  return res.render('users/register', {
    errors: resultValidation.mapped(),
    oldData : req.body
  });
}

return res.send('Se pasaron todas las validaciones')

  }
}



