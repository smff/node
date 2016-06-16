'use strict';

/**
 * Created by dima on 08.06.16.
 */

var responseService = require('../../services/responseService');
var personsUpdateService = require('../../services/persons/personsUpdateService');

module.exports = function (req, res, next) {
  req.body.personId = req.params.personId;
  personsUpdateService(res, next, req.body);
};