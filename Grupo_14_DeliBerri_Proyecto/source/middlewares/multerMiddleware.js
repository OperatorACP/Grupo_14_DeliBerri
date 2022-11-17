const multer = require('multer')
const path = require('path')

const storageAvatar = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadAvatar = multer({storage: storageAvatar})
module.exports = uploadAvatar;
