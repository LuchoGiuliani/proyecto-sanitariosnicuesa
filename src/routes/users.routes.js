const { Router } = require("express")
const router = Router()
const middlewareRegister = require("../middlewares/register");
const middlewareLogin = require("../middlewares/login.js");

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin')


const { login, register, process, access, logout } = require('../controllers/users.controller');

// login
router.get("/users/login", login)
router.post('/users/access', middlewareLogin, access)

router.post('/users/logout',logout)

router.post('/users/logout',[isLogged],logout)
router.post('/users/logout',[isAdmin],logout)


// register
router.get("/users/register", register)
router.post("/users/register", middlewareRegister, process)

module.exports = router