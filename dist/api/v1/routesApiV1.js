'use strict';

var express = require('express');
var v1 = express.Router();

v1.use('/persons', require('./methods/persons'));

module.exports = v1;