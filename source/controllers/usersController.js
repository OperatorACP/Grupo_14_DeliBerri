const db = require("../database/models")
const fs = require("fs");
const user = require('../routes/usersRoutes');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");


const userController = {
    register: (req, res) => {
      return res.render("users/register", {user});
    },
  
    processingRegister: (req, res) => {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render("users/register", {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }
      let userInDB = db.user.findByField("email", req.body.email);
      if (userInDB) {
        return res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya esta registrado",
            },
          },
          oldData: req.body,
        });
      }
      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file ? req.file.filename : null,
      };
      delete userToCreate.confirm_password;
      let userCreated = db.user.create(userToCreate);
      return res.redirect("/profile");
    },
  
    login: (req, res) => {
      return res.render("users/login",{user});
    },
  
    loginProcess: (req, res) => {
      let userToLogin = db.user.findByField("email", req.body.email);
  
      if (userToLogin) {
        let isThePasswordOk = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (isThePasswordOk) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
          }
          return res.redirect("/profile");
        }
        return res.render("users/login", {
          errors: {
            email: {
              msg: "Las credenciales son invalidas.",
            },
          },
        });
      }
      return res.render("users/login", {
        errors: {
          email: {
            msg: "No se encuentra este email en nuestra base de datos.",
          },
        },
      });
    },
  
    profile: (req, res) => {
      return res.render("users/profile", {
        user: req.session.userLogged,
      });
    },
  
    logout: (req, res) => {
      res.clearCookie("userEmail");
      req.session.destroy();
      return res.redirect("/");
    }
  };
  
  module.exports = userController;
  