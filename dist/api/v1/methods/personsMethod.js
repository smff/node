'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _personsController = require('../controllers/personsController');

var router = (0, _express.Router)();

router.route('/').get(_personsController.personsReadAll).post(_personsController.personsCreate);
router.route('/:personId').get(_personsController.personsReadOne).put(_personsController.personsUpdate);

exports.default = router;