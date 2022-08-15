const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') })
const isAdmin = require('../middlewares/isAdmin')

// let updateImage 

// if () {

// }

const middlewares= [upload.any(), isAdmin]

module.exports = middlewares