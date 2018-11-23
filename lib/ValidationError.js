"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidationError =
/*#__PURE__*/
function () {
  /**
   * Create a new ValidationError
   *
   * @param {string} message The validation error message
   * @param {string} path The path to the object value with the error
   * @param {*} value The value which caused the error
   * @param {Model} model The model in which the error occurred
   * @param {Check} check The check which threw the error
   */
  function ValidationError(message, path) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var check = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, ValidationError);

    this.message = message;
    this.path = path;
    this.value = value;
    this.model = model;
    this.check = check;
  }
  /**
   * Get the validation error message
   *
   * @return {string}
   */


  _createClass(ValidationError, [{
    key: "getMessage",
    value: function getMessage() {
      return this.message;
    }
    /**
     * Get the path to the object value with the error
     *
     * @return {string}
     */

  }, {
    key: "getPath",
    value: function getPath() {
      return this.path;
    }
    /**
     * Get the value which caused the error
     *
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Get the model in which the error occurred
     *
     * @return {Model}
     */

  }, {
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
    /**
     * The check which threw the error
     *
     * @return {Check}
     */

  }, {
    key: "getCheck",
    value: function getCheck() {
      return this.check;
    }
  }]);

  return ValidationError;
}();

var _default = ValidationError;
exports.default = _default;