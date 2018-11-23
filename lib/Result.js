"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Result =
/*#__PURE__*/
function () {
  function Result(valid) {
    var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Result);

    this.valid = valid;
    this.errors = errors;
  }
  /**
   * Check whether or not the object is valid
   *
   * @return {boolean}
   */


  _createClass(Result, [{
    key: "isValid",
    value: function isValid() {
      return this.valid === true;
    }
    /**
     * Check whether or not there was an error
     *
     * @return {boolean}
     */

  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return this.errors.length > 0;
    }
    /**
     * Get the validation errors if there was any
     *
     * @return {*}
     */

  }, {
    key: "getErrors",
    value: function getErrors() {
      return this.errors;
    }
  }]);

  return Result;
}();

var _default = Result;
exports.default = _default;