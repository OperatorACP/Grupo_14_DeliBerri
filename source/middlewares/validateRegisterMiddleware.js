const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("nombre").notEmpty().withMessage("Tienes que escribir un nombre."),
  body("apellido").notEmpty().withMessage("Tienes que escribir un apellido."),
  body("usario")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre de usuario."),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico.")
    .bail()
    .isEmail()
    .withMessage(
      "Tienes que escribir un formato de correo electrónico válido."
    ),
  body("pais").notEmpty().withMessage("Tienes que elegir un país."),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña."),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];
