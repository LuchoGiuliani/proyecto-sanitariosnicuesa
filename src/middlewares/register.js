const multer = require('multer');
const storage = require('../modules/storage');
const register = require('../validations/register');
const upload = multer({storage: storage('avatars')});
module.exports = [upload.any(), register]