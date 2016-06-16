'use strict';

/**
 * Created by dima on 08.06.16.
 */

var responseService = require('../../services/responseService');
var personsOneProfileService = require('../../services/persons/personsOneProfileService');

module.exports = function (req, res, next) {
  personsOneProfileService(res, next, { personId: req.params.personId });
};