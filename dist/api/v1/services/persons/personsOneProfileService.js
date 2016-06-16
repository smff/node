'use strict';

var PersonModel = require('../../schemas/personsSchema');

module.exports = function (res, next, params) {

    PersonModel.findOne({ where: { pr_d_id: params.personId } }).then(function (data) {
        if (!data) {
            var err = new Error();
            err.name = 'NotFound';
            err.message = 'User not found';
            throw err;
        }
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
};