'use strict';

/**
 * Created by dima on 10.06.16.
 */

var aliasPersons = require('../../data/persons/aliasPersonsService');

module.exports = function (params) {
    var requred = ['pr_d_id', 'pr_fs_nm', 'pr_ct', 'pr_adr'];
    var result = { name: 'requiredValidation', status: true, message: [] };

    // console.log(params);

    requred.forEach(function (item, i, requred) {
        // console.log(item);

        if (!params.hasOwnProperty(item)) {
            result.message.push('Validation error: ' + aliasPersons(item, 'paramToAlias') + ' required');
        }
    });

    if (typeof result.message !== 'undefined' && result.message.length > 0) {
        result.status = false;
    }

    return result;
};