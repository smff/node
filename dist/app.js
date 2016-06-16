'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _errorHandlerService = require('./api/services/error/errorHandlerService');

var _errorHandlerService2 = _interopRequireDefault(_errorHandlerService);

var _apiRoutes = require('./api/apiRoutes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));

app.use((0, _methodOverride2.default)());

app.use('/api', _apiRoutes2.default);

app.use(_errorHandlerService2.default);

app.listen(3000, function () {
    return console.log('It seems to work');
});

exports.default = app;