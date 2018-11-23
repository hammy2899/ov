"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Check = _interopRequireDefault(require("./Check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChecksManager =
/*#__PURE__*/
function () {
  function ChecksManager() {
    _classCallCheck(this, ChecksManager);

    this.checks = [];
    this.options = {};
  }
  /**
   * Add a new check
   *
   * @param {Check} check The name of the check
   * @param {Object|boolean} options Object containing the check options
   */


  _createClass(ChecksManager, [{
    key: "check",
    value: function check(_check) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_check !== undefined && _check !== null && _check instanceof _Check.default) {
        this.checks.push(_check);
      } else {
        throw new Error('Check name must be an instance of Check.');
      }

      if (options !== false) {
        if (options && _typeof(options) === 'object' && options.constructor === Object) {
          this.options[_check.getName()] = options;
        } else {
          throw new Error("Options for '".concat(_check.getName(), "' must be an object."));
        }
      }
    }
    /**
     * Get an array of checks
     *
     * @return {Check[]}
     */

  }, {
    key: "getChecks",
    value: function getChecks() {
      return this.checks;
    }
    /**
     * Get the options for the specified check
     *
     * @param {string} checkName The name of the check
     * @return {Object}
     */

  }, {
    key: "getOptions",
    value: function getOptions(checkName) {
      if (checkName !== undefined && checkName !== null && typeof checkName === 'string' && checkName !== '') {
        return this.options[checkName] || {};
      }

      throw new Error('Check name must be a string and can\'t be empty.');
    }
  }]);

  return ChecksManager;
}();

var _default = ChecksManager;
exports.default = _default;