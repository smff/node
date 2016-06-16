'use strict';

/**
 * Created by dima on 08.06.16.
 */

var responseService = require('../../services/responseService');
var personsAllProfileService = require('../../services/persons/personsAllProfileService');

module.exports = function (req, res, next) {
  personsAllProfileService(res, next, { personId: 'fsd' });
};