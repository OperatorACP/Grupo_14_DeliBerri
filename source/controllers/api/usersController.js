const db = require('../../database/models/index');

const apiUsersController = {
    index: (req, res) => {
      db.user.findAll({attributes: ['id', 'name', 'lastname', 'user', 'email', 'avatar' ]})
       .then ( users => {
           return res.status(200).json({
               count: users.length,
               users: users
           })
       })  
    },
    
    detail: (req, res) => {
		db.user.findByPk(req.params.id, {attributes: ['id', 'name', 'lastname', 'user', 'email', 'avatar' ]})
		.then(users => {
			return res.status(200).json({
                user: users
			})
		})
	   .catch(err => {
		res.send(err)
	})
	}

}


module.exports = apiUsersController