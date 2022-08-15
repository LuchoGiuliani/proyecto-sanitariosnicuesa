const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const { index } = require("../models/users.model");
const register = [
  body("nombre")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
  body("apellido")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isEmail()
    .withMessage("No corresponde a un email")
    .bail()
    .custom((value) => {
      let users = index();
      users = users.map((u) => u.email);
      if (users.includes(value)) {
        throw new Error("El email ya esta en uso");
      }
      return true;
    })
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("Complete los campos")

    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
    
     body('avatar').custom((value,{req}) =>{
      let archivos =req.files
      if(!archivos || archivos.length == 0){
          throw new Error('No se subio ninguna imagen')
      }
      let extensiones = ['.svg','.png','.jpg','.jpeg']
      let avatar = archivos[0]
      let extension = extname(avatar.filename)

      if(!extensiones.includes(extension)){
         unlinkSync(resolve(__dirname, '../../public/images/','avatars',avatar.filename))
          throw new Error('La imagen no tiene una extension valida')
      }

      if(avatar.size > 2097152){
          unlinkSync(resolve(__dirname, '../../public/images/','avatars',avatar.filename))
          throw new Error('La imagen supera el peso de 2MB')
      }

      return true
  })
 
];
module.exports = register;