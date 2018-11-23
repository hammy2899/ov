"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Any = _interopRequireDefault(require("./Any"));

var _Check = _interopRequireDefault(require("../Check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StringModel =
/*#__PURE__*/
function (_AnyModel) {
  _inherits(StringModel, _AnyModel);

  function StringModel() {
    var _this;

    _classCallCheck(this, StringModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringModel).call(this));

    _this.checksManager.check(new _Check.default('type', function (value) {
      return typeof value === 'string' || value instanceof String;
    }));

    return _this;
  }
  /**
   * Check whether or not the string only includes a-z, A-Z and 0-9
   * /^[a-zA-Z0-9\s]+$/
   *
   * @return {StringModel}
   */


  _createClass(StringModel, [{
    key: "alphanumeric",
    value: function alphanumeric() {
      var check = new _Check.default('alphanumeric', function (value) {
        return new RegExp(/^[a-zA-Z0-9\s]+$/).test(value);
      });
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the string only contains lowercase characters
     * string.toLowercase === value
     *
     * @return {StringModel}
     */

  }, {
    key: "lowercase",
    value: function lowercase() {
      var check = new _Check.default('lowercase', function (value) {
        return value.toLowerCase() === value;
      });
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the string only contains uppercase characters
     * string.toUppercase === value
     *
     * @return {StringModel}
     */

  }, {
    key: "uppercase",
    value: function uppercase() {
      var check = new _Check.default('uppercase', function (value) {
        return value.toUpperCase() === value;
      });
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the string has more characters than the specified limit
     * string.length > limit
     *
     * @param {number} limit
     *
     * @return {StringModel}
     */

  }, {
    key: "min",
    value: function min(limit) {
      var check = new _Check.default('min', function (value) {
        return value.length > limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the string has less characters than the specified limit
     * string.length < limit
     *
     * @param {number} limit
     *
     * @return {StringModel}
     */

  }, {
    key: "max",
    value: function max(limit) {
      var check = new _Check.default('max', function (value) {
        return value.length < limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the string matches the specified regex
     * regex.test(string)
     *
     * @param {string|RegExp} pattern
     * @param {string} flags = ''
     *
     * @return {StringModel}
     */

  }, {
    key: "regex",
    value: function regex(pattern) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flags);
      var check = new _Check.default('regex', function (value) {
        return regexp.test(value);
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

  return StringModel;
}(_Any.default);

var _default = StringModel;
exports.default = _default;