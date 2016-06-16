'use strict';

/**
 * Created by dima on 08.06.16.
 */

var responseService = require('../../services/responseService');
var personsCreateService = require('../../services/persons/personsCreateService');

module.exports = function (req, res, next) {
  personsCreateService(res, next, req.body);
};