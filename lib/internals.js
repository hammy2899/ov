"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.format = format;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(object) {
  return object && _typeof(object) === 'object' && object.constructor === Object;
}

function format(string) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var a = string;
  args.forEach(function (k, i) {
    var arg = '';

    if (typeof args[i] === 'function') {
      arg = args[i].name;
    } else {
      arg = args[i].toString();
    }

    a = a.replace(new RegExp("\\{".concat(i, "}"), 'g'), arg);
  });
  return a;
}