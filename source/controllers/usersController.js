 const bcryptjs = require('bcryptjs');
 const {validationResult} = require('express-validator');
 const fs = require('fs');
 const {extname,resolve} = require('path');
 const db = require("../database/models");
 const user = require('../routes/usersRoutes');
 const sequelize = db.sequelize;
 const User = db.user;

 const usersController = {

     login: async (req, res) => {
         try {
             return res.render('users/login', {old})
         } catch (error) { console.log(error); }
     },


    
     //Login de usuarios

     access:  (req , res) => {
         try {
             const resultValidation = validationResult(req)

             if (resultValidation.errors.length > 0) { 
                 return res.render('users/login', {
                     errors: resultValidation.mapped(),
                     old : req.body
                 })
             } else {
                  db.user.findOne({
                     where : {email : req.body.email}
                 })
                     .then(userToLogin => {        
                         let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                         if (correctPassword) {
                             delete userToLogin.password;
                             req.session.userLogged = userToLogin;
                             userToLogin.admin == 1 ? req.session.isAdmin = true : req.session.isAdmin = false;
                             req.body.remember != undefined ?
                             res.cookie('userEmail', req.body.email, {maxAge : (((1000 * 60) * 60)*24)}) : null;  //cookie de 24 hs 
                             return res.redirect('profile');
                         } else {
                             return res.render('users/login', {
                                 errors: {password: {msg: 'Contraseña incorrecta'}},
                                 old : req.body
                             })
                         }
                     })
                     .catch((fail) => { return res.render('users/login', {
                             errors: {email: {msg: 'El email con el que intenta ingresar no existe'}}
                         })
                     })
             }
         } catch (error) { console.log(error); }
     },

     //register de usuarios

     register:  (req , res) => { 
         try {
             return res.render('users/register');
         } catch (error) { console.log(error); }
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
                lastname: req.body.lastname,
                user: req.body.user,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                birthDate: req.body.birthDate,
                nationality: req.body.nationality,
                interestCategory: req.body.interestCategory,
                avatar: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
                isAdmin: req.body.email.includes('@IncluirCorreoDeAdmin') ? 1 : 0
            })
            
            .then(function(userlogon) {
                req.session.userLogged = userlogon;
                res.redirect('/users/profile');
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            if (usuarioRepetido) {
                return res.render('register', {
                    errors: {
                        eMail: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    old: req.body
            })} else {
                
                
                return res.render('register', {
                    errors: resultValidation.mapped(),
                    old: req.body
                });
            }
        }
    },

    //Profile access y logout

    profile:  (req , res) => { // GET profile
         try {
             return res.render('users/profile', {
                 user: req.session.userLogged
             })
         } catch (error) { console.log(error); }
     },

     logout:  (req, res) => {
         try {
             res.clearCookie('userEmail')
             req.session.destroy()
             return res.redirect('/')
         } catch (error) { console.log(error); }
     },

      //Profile edit y erase

     updateUserNames: async (req, res) => {
         try {
             await db.User.update({
                 name: req.body.name,
                 lastname: req.body.lastname,
                 }, {where : {id: req.params.id} })
             return res.redirect('/users/profile');
         } catch (error) { console.log(error); }
     },

     updateUserAvatar: async (req, res) => {
         try {
             await db.User.update({
                 avatar: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
                 }, {where : {id: req.params.id}}
                 /*.then(function(file) {
                     let path = resolve(__dirname,'..','..','public','img','users',)
                     fs.unlink(path)
                 }) */
                 )
                 return res.redirect('/users/profile');
             } catch (error) { console.log(error); }
     },

     updateUserPass:  (req, res) => {
         try {
              db.User.findOne({ where : {email : req.body.email} })
                 .then(userToUpdate => {
                     let correctPassword = bcryptjs.compareSync(req.body.actualPass, userToUpdate.password);
                     if ((correctPassword) && (req.body.newPass == req.body.checkNewPass)) {
                         db.User.update({
                             password: bcryptjs.hashSync(req.body.newPass, 10),
                             }, {where : {id: userToUpdate.id}}
                             )
                         return res.redirect('/users/profile');
                     }
                 })
         } catch (error) { console.log(error); }
     },

     destroy: async (req, res) => {
         try {
             await db.User.destroy({ where: {id: req.params.id} });
             req.session.destroy();
             return res.redirect('/');
         } catch (error) { console.log(error); }
     },

      //Cart 

    //  cart: async (req , res) => {
    //      try {
    //          return res.render('users/cart');
    //      } catch (error) { console.log(error); }
    //  }
 }

 module.exports = usersController;