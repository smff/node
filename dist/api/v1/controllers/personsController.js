'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.personsReadAll = personsReadAll;
exports.personsCreate = personsCreate;
exports.personsReadOne = personsReadOne;
exports.personsUpdate = personsUpdate;

var _personsSchema = require('../schemas/personsSchema');

var _personsSchema2 = _interopRequireDefault(_personsSchema);

var _personsUpdateRequredValidationService = require('../services/validation/persons/personsUpdateRequredValidationService');

var _personsUpdateRequredValidationService2 = _interopRequireDefault(_personsUpdateRequredValidationService);

var _personsCreateRequredValidationService = require('../services/validation/persons/personsCreateRequredValidationService');

var _personsCreateRequredValidationService2 = _interopRequireDefault(_personsCreateRequredValidationService);

var _aliasPersonsService = require('../services/data/persons/aliasPersonsService');

var _aliasPersonsService2 = _interopRequireDefault(_aliasPersonsService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function personsReadAll(req, res, next) {
    var limit = 100;

    _personsSchema2.default.findAll({ limit: limit }).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
}

function personsCreate(req, res, next) {
    var params = req.body;
    var requredValidation = (0, _personsCreateRequredValidationService2.default)(params);

    params = (0, _aliasPersonsService2.default)(params, 'aliasesToParam');

    if (!requredValidation.status) {
        var err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    _personsSchema2.default.create(params).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    });
}

function personsReadOne(req, res, next) {

    _personsSchema2.default.findOne({ where: { pr_d_id: req.params.personId } }).then(function (data) {
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
}

function personsUpdate(req, res, next) {
    req.body.personId = req.params.personId;

    var params = req.body;
    var requredValidation = (0, _personsUpdateRequredValidationService2.default)(params);

    params = (0, _aliasPersonsService2.default)(params, 'aliasesToParam');

    if (!requredValidation.status) {
        var err = new Error();
        err.name = requredValidation.name;
        err.message = requredValidation.message;
        throw err;
    }

    var userId = params.pr_d_id;
    delete params.pr_d_id;

    _personsSchema2.default.update(params, { where: { pr_d_id: userId } }).then(function (data) {

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
}