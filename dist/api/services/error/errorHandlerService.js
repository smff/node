'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (err, req, res, next) {
    console.log(err);

    console.log(err.name);
    console.log(err.message);

    if (err.name === 'requiredValidation') {
        res.status(422);
        res.json({
            errorType: err.name,
            message: err.message
        });
    }

    if (err.name === 'SequelizeValidationError') {
        res.status(422);
        // console.log(err.errors);

        res.json({
            errorType: 'checkValidation',
            message: err.message
        });
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(422);
        // console.log(err.errors);

        res.json({
            errorType: 'checkValidation',
            message: err.message
        });
    }

    if (err.name === 'NotFound') {
        res.status(404);
        // console.log(err.errors);

        res.json({
            errorType: 'NotFound',
            message: err.message
        });
    }

    next();
};

; /**
   * Created by dima on 10.06.16.
   */