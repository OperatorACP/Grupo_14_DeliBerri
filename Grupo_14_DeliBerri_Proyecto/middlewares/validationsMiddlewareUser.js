const { check } = require('express-validator');

validationsMiddlewareUser = [
    check('name').notEmpty().withMessage('Nombre es un Campo obligatorio').isLength({ min:2}).withMessage('Nombre debera tener al menos 2 caracteres'),
    check('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio').isLength({ min:2}).withMessage('Apellido debera tener al menos 2 caracteres'),
    check('user').notEmpty().withMessage('Usuario es un Campo obligatorio'),
    check('email').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    check('password').notEmpty().withMessage('Contrasena es un Campo obligatorio').bail().isLength({ min: 8}).withMessage('La contrasena debera tener al menos 8 caracteres'),
    //check('avatar').isIn([ "PNG", "JPEG", "GIF" , "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'),,
];

module.exports = validationsMiddlewareUser;
