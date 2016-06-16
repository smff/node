'use strict';

var PersonModel = require('../../schemas/personsSchema');
var aliasPersons = require('../data/persons/aliasPersonsService');
var personsUpdateRequredValidationService = require('../validation/persons/personsUpdateRequredValidationService');

module.exports = function (res, next, params) {

    // console.log(params);

    var requredValidation = {};
    params = aliasPersons(params, 'aliasesToParam');

    requredValidation = personsUpdateRequredValidationService(params);

    if (!requredValidation.status) {
        var err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    var userId = params.pr_d_id;
    delete params.pr_d_id;

    PersonModel.update(params, { where: { pr_d_id: userId } }).then(function (data) {

        if (data == false) {
            var err = new Error();
            err.name = 'NotFound';
            err.message = 'User not found';
            throw err;
        } else {
            data = {
                status: 'ok',
                message: 'user updated'
            };
        }

        res.json(data);
    }).catch(function (err) {
        next(err);
    });
};