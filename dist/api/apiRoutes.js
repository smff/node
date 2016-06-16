'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _apiRouterV1Methods = require('./v1/apiRouterV1Methods');

var _apiRouterV1Methods2 = _interopRequireDefault(_apiRouterV1Methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.use('/v1', _apiRouterV1Methods2.default);

exports.default = router;