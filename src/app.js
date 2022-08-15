const path = require('path');
const express = require('express');
const app = express();
const { port, callback } = require("./modules/listen.js");
const public = require('./modules/public.js');
const session = require('express-session')
const method = require('method-override');
const cookieParser = require ("cookie-parser");
const recordameMiddleware = require("./middlewares/recordameMiddleware")

app.listen(port, callback(`Abriendo servidor en http://localhost:` + port))

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(public)

// Req.query Req.body //

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(method('m'));
// app.use(require('method-override')('m'));

app.use(session({
    secret: 'nodejs',
    saveUninitialized: true,
    resave: true
})) // req.session

app.use(require('./middlewares/user'))
app.use(require('./routes/main.routes'))
app.use(require('./routes/product.routes'))
app.use(require('./routes/users.routes'))

app.use(cookieParser())
app.use(recordameMiddleware)



