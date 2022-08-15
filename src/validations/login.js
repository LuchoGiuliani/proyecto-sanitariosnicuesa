const { body } = require('express-validator');
const {index, find} = require('../models/users.model')
const {compareSync} = require('bcryptjs')

const login = [
// Email
body('email').notEmpty().withMessage('El email no puede quedar vacío.').bail().isEmail().withMessage('El formato de email no es válido.').bail().custom(value => {
  let users = index()
  users = users.map(u => u.email)
  if(!users.includes(value)){
      throw new Error('El email no esta registrado')
  }
  return true
}),
// Password
body('password').notEmpty().withMessage('La contraseña no puede quedar vacía.').bail().isLength({min : 4}).bail().custom((value,{req})=>{
  let {email} = req.body
  let user = find(email)

  if(!user){
    throw new Error("Usuario no encontrado")
  }

  if(!compareSync(value,user.password)){
    throw new Error("La contraseña es incorrecta")
  }
  
  return true

})
]

module.exports = login