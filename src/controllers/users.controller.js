const { validationResult } = require('express-validator');
const { index, create, write, find, deleteImage } = require("../models/users.model");



const usersController = {
  // login: (req, res) => {
  //   return res.render("./users/login", {
  //     title: "Login",
  //     styles: ["style", "header", "footer", "login"],
  //   });
  // },

  register: (req, res) => {
    return res.render("./users/register", {
      title: "Registro",
      styles: ["style", "header", "footer", "register"],

    })
  },


  process: function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      deleteImage(req.files[0].filename)
      return res.render('users/register', {
        title: "Registro",
        styles: ["style", "header", "footer", "register"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }
    req.body.image = req.files[0].filename;

    let newUser = create(req.body)
    let users = index();
    users.push(newUser)
    write(users)
    return res.redirect('/')
  },


  access: function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones
    if (errors && errors.length > 0) {
      return res.render('users/login', {
        title: "Login",
        styles: ["style", "header", "footer", "login"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }
    let user = find(req.body.email)
    req.session.user = user
    if (req.body.recordame != undefined) {
      res.cookie("recordame", user.email / id, { maxAge: 172800000 })
    }
    return res.redirect('/')
  },

  login: function (req, res) {
    return res.render('users/login', {
      title: "Login",
      styles: ["style", "header", "footer", "login"]
    });
  },

  logout: function (req, res) {
    delete req.session.user
    return res.redirect('/')
  }
}

module.exports = usersController