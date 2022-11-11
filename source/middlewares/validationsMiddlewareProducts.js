const { check } = require('express-validator');

validationsMiddlewareProducts = [
    /*check('title').notEmpty().withMessage('Nombre del producto es un campo obligatorio').isLength({ min:3}).withMessage('Nombre debe tener al menos 5 carácteres'),
    check('shortDescription').notEmpty().withMessage('Descripción del producto es un campo obligatorio').isLength({ min:20}).withMessage('Descripción debe tener al menos 20 carácteres'),
    check('price').notEmpty().withMessage('Precio del producto es un campo obligatorio').isNumeric().withMessage('El precio debe ser en números'),
    check('category').notEmpty().withMessage('Tenés que elegir una categoría'),
    check('image').notEmpty().withMessage('Tenés que subir una imagen').isIn([ '.PNG', '.JPEG', '.JPG']).withMessage('Los formatos soportados son solo JPG, JPEG y PNG'),
    /*check("image").custom((value, { req }) => {

        let file = req.file;

        if(file){

            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

            let fileExtension = path.extname(file.originalname);

            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', ');
            }
        }

        return true;
    }),*/
];

module.exports = validationsMiddlewareProducts;