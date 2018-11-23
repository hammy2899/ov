"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("./models");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: "any",
    value: function any() {
      this.model = new _models.AnyModel();
      return this.model;
    }
  }, {
    key: "string",
    value: function string() {
      this.model = new _models.StringModel();
      return this.model;
    }
  }, {
    key: "number",
    value: function number() {
      this.model = new _models.NumberModel();
      return this.model;
    }
  }, {
    key: "date",
    value: function date() {
      this.model = new _models.DateModel();
      return this.model;
    }
  }, {
    key: "boolean",
    value: function boolean() {
      this.model = new _models.BooleanModel();
      return this.model;
    }
  }, {
    key: "array",
    value: function array() {
      this.model = new _models.ArrayModel();
      return this.model;
    }
  }]);

  return Model;
}();

var _default = Model;
exports.default = _default;