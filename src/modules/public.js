const {static} = require('express');
const {join} = require('path');

let public = static(join(__dirname, '../../public'));

module.exports = public