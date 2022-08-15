const {Router}= require("express")
const router = Router()	

let { home  } = require ('../controllers/main.controller');

router.get("/", home)


module.exports = router