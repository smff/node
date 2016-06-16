'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _personsMethod = require('./methods/personsMethod');

var _personsMethod2 = _interopRequireDefault(_personsMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.use('/persons', _personsMethod2.default);

exports.default = router;