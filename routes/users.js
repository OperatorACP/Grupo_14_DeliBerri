const router = require("../app");
const userController = require("../controllers/userController");

router.get('/', function(req,res,next){
    res.send('Respond with a Resource');
});


router.get('/register', userController.register)
router.get('/login', userController.login);
router.get('/list', userController.list);

module.exports= router;
