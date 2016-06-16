'use strict';

var express = require('express');
var persons = express.Router();

var personsReadOne = require('./persons/personsReadOne');
var personsReadAll = require('./persons/personsReadAll');
var personsCreate = require('./persons/personsCreate');
var personsUpdate = require('./persons/personsUpdate');

persons.get('/', personsReadAll);
persons.get('/:personId', personsReadOne);
persons.post('/', personsCreate);
persons.put('/:personId', personsUpdate);

module.exports = persons;