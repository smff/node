'use strict';

var PersonModel = require('../../schemas/personsSchema');

module.exports = function (res, next, params) {

    PersonModel.findAll({ limit: 100 }).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
};