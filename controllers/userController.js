const userController = {
    'register' : function(req,res){
        res.render('register');
    },

    'login' : function(req,res){
        res.render('login');
    },

    'list' : function(req,res){
        let users = [
            { id: 1, name: Rosa},
            { id: 2, name: Dario}
        ]

        res.render('userList', {'users': users});
    }
}

module.exports = userController;