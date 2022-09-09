// 1, Guardar al usuario en la DB(REALIZADO)
// 2. Buscar a todos los usuarios de la DB (REALIZADO)
// 3. Buscar al usuario que se quiere loguear por su email(REALIZADO)
// 4. Buscar a un usuario por ID (REALIZADO)
// 5. Editar la informacion de un usuario (PENDIENTE)
// 6. Eliminar a un usuario de la DB (REALIZADO)



const fs = require('fs');
const model = require('./products.model');
const { all } = require('./products.model');

const User = {
    
    
    fileName : "source/data/users.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
        return lastUser.id + 1;
    }
        return 1;
    },
 
    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
      let allUsers = this.findAll();
      let userFound = allUsers.find(oneUser => oneUser.id === id);
      return userFound
    },

    findByField: function(field,text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 4));
        return true;
    },

    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 4));
        return true;
    }
}


module.exports = User;