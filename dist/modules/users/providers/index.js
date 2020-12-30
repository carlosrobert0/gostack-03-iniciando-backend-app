"use strict";

var _tsyringe = require("tsyringe");

var _BCrypHashProvider = _interopRequireDefault(require("./HashProvider/implementations/BCrypHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('HashProvider', _BCrypHashProvider.default);