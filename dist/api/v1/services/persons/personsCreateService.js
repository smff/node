'use strict';

var PersonModel = require('../../schemas/personsSchema');
var aliasPersons = require('../data/persons/aliasPersonsService');
var personsCreateRequredValidationService = require('../validation/persons/personsCreateRequredValidationService');

module.exports = function (res, next, params) {

    var requredValidation = {};
    params = aliasPersons(params, 'aliasesToParam');

    requredValidation = personsCreateRequredValidationService(params);

    if (!requredValidation.status) {
        var err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    PersonModel.create(params).then(function (data) {

        res.json(data);
    }).catch(function (err) {
        next(err);
    });
};