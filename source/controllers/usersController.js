const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../database/models/');
const { Op } = require("sequelize");

const sequelize = db.sequelize;
const users = db.users;


const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: async (req, res) => {
      
        const resultValidation = validationResult(req);
       

        let usuarioRepetido = await db.user.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }    
         })


        if (!resultValidation.errors.length && !usuarioRepetido) {
            db.user.create({
               name: req.body.name,
                lastName: req.body.lastName,
                user: req.body.user,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync()),
                birthDate: req.body.birthDate,
                nationality: req.body.nationality,
                interestCategory: req.body.interestCategory,
                avatar: req.files.length ? req.files[0].filename : null,
                isAdmin: req.body.isAdmin
               
            }).then(function(userlogon) {
                req.session.userLogged = userlogon;
                res.redirect('/users/profile');
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            if (usuarioRepetido) {
                return res.render('users/register', {
                    errors: {
                        eMail: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
            })} else {
                
                
                return res.render('users/login', {
                
                    oldData: req.body
                });
            }
        }
    },

   

    login: (req, res) => {
        return res.render('users/login', {registerSuccessful: req.query.registerSuccessful});
    },

    loginProcess: async (req, res) => {
        let userToLogin = await db.user.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.pass);
            if (isOkThePassword) {
                delete userToLogin.pass;
                req.session.userLogged = userToLogin;
                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: 5 * 60 * 1000 });
                }

                return res.redirect('/users/profile');
                
            } else {//si no coincide la contraseña se renderiza la vista de login con error
                res.render('users/login', {
                    titulo: "Ingresá", old: req.body, errors: {
                        eMail: {
                            msg: "Las credenciales son invalidas"
                        }
                    }
                })
            }

        } else { //si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            res.render('users/login', {
                titulo: "Ingresá", errors: {
                    eMail: {
                        msg: "El usuario no se encuentra en la base de datos"
                    }
                }
            })
        }
    },

    profile: (req, res) => {
        return res.render('userProfile', {
            userlogon: req.session.userLogged
        });
    },

    edit: (req, res) => {
        res.render('userProfileToEdit', {
            userlogon: req.session.userLogged
        })
    },

    update: (req, res) => {
        db.user.findByPk(req.session.userLogged.id)
            .then(function (userlogon) {
                userlogon.update({
                
                    name: req.body.name,
                    lastName: req.body.lastname,
                    user: req.body.user,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync()),
                    birthDate: req.body.birthDate,
                    nationality: req.body.nationality,
                    interestCategory: req.body.interestCategory,
                    avatar: req.files.length ? req.files[0].filename : null,
                    isAdmin: req.body.isAdmin

                }).then(userlogon => {
                    req.session.userLogged = userlogon;
                    res.redirect('/users/profile')
                }).catch(function(e){
                    res.render('error')
                });
            })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userEmail');
        return res.redirect('/');
    }
}

module.exports = usersController;