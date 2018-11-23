"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Check =
/*#__PURE__*/
function () {
  /**
   * Create a new check
   *
   * @param {string} name The name of the check
   * @param {Function<*>} func The function to perform the check
   * @param {Array} errorParams = [] An array of values for error message formatting
   */
  function Check(name, func) {
    var errorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Check);

    this.name = name;
    this.func = func;
    this.errorParams = errorParams;
  }
  /**
   * Get the check name
   *
   * @return {string}
   */


  _createClass(Check, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * Perform the check on the specified value
     *
     * @param {*} value
     *
     * @returns {boolean} Whether or not the validation check passed
     */

  }, {
    key: "execute",
    value: function execute(value) {
      if (typeof this.func === 'function') {
        return this.func(value) === true;
      }

      throw new Error('Check function must be a function');
    }
    /**
     * Get the error message params for formatting
     *
     * @return {Array}
     */

  }, {
    key: "getErrorParams",
    value: function getErrorParams() {
      return this.errorParams;
    }
  }]);

  return Check;
}();

var _default = Check;
exports.default = _default;