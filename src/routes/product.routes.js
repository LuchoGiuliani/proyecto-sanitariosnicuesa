const { Router } = require("express")
const router = Router()
let { process,productEdit, edit, productDetail, finder, productCart, productCreateDetail, productDelete, destroy } = require('../controllers/product.controller');
const middlewareEdicion = require('../middlewares/edicion')
const middlewareProductCreate = require('../middlewares/productCreate')
const isLogged = require('../middlewares/isLogged')
const isAdmin = require('../middlewares/isAdmin')


router.get("/products/finder", finder)
router.get("/products/create/details",productCreateDetail)
router.post('/products/save',[middlewareProductCreate],process) //ok

router.get("/carrito",[isLogged],productCart)


router.put('/products/editForm/:id',[middlewareEdicion],edit)
router.get("/products/edit/:id",[isAdmin], productEdit)
router.get("/products/:id", productDetail)
router.get('/products/productDelete/:id',[isAdmin], productDelete) 
router.delete('/delete/:id',[isAdmin],destroy) 


module.exports = router