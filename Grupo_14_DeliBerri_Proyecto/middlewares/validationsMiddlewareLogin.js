const { compareSync } = require('bcryptjs');
const { check } = require('express-validator');
const db = require('../database/models');

validationsMiddlewareUser = [
    check('email').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    check('password').notEmpty().withMessage('Contrasena es un Campo obligatorio').bail().isLength({ min: 8}).withMessage('La contrasena debera tener al menos 8 caracteres')
    .custom( async (value,{req}) => {
      let usuario = await db.user.findOne({where: {email:req.body.email}})
      if(usuario && compareSync(value,usuario.password)){return true}
      else {return false}
    })

    //check('avatar').isIn([ "PNG", "JPEG", "GIF" , "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'),,
];

module.exports = validationsMiddlewareUser;
