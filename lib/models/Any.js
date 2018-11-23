"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChecksManager = _interopRequireDefault(require("../ChecksManager"));

var _Check = _interopRequireDefault(require("../Check"));

var _internals = require("../internals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnyModel =
/*#__PURE__*/
function () {
  function AnyModel() {
    _classCallCheck(this, AnyModel);

    this.checksManager = new _ChecksManager.default();
  }
  /**
   * Check whether or not the value exists (is in the object)
   * value !== undefined
   *
   * @return {AnyModel}
   */


  _createClass(AnyModel, [{
    key: "exists",
    value: function exists() {
      var check = new _Check.default('exists', function (value) {
        return value !== undefined;
      });
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the value is empty
     *
     * @return {AnyModel}
     */

  }, {
    key: "notEmpty",
    value: function notEmpty() {
      var check = new _Check.default('notEmpty', function (value) {
        if ((0, _internals.isObject)(value)) {
          return Object.keys(value).length > -1;
        }

        if (Array.isArray(value)) {
          return value.length > -1;
        }

        if (typeof value === 'number') {
          return true;
        }

        if (typeof value === 'string') {
          return value.length > -1;
        }

        return false;
      });
      this.checksManager.check(check);
      return this;
    }
    /**
     * Get the checks manager
     *
     * @return {ChecksManager}
     */

  }, {
    key: "getChecksManager",
    value: function getChecksManager() {
      return this.checksManager;
    }
  }]);

  return AnyModel;
}();

var _default = AnyModel;
exports.default = _default;