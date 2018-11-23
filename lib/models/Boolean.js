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

var BooleanModel =
/*#__PURE__*/
function (_AnyModel) {
  _inherits(BooleanModel, _AnyModel);

  function BooleanModel() {
    _classCallCheck(this, BooleanModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(BooleanModel).apply(this, arguments));
  }

  _createClass(BooleanModel, [{
    key: "truthy",

    /**
     * Check whether or not the boolean is truthy to the specified value (equal)
     * boolean === equal
     *
     * @return {BooleanModel}
     */
    value: function truthy() {
      var equal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var check = new _Check.default('truthy', function (value) {
        return value === equal;
      }, [equal]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the boolean is falsy to the specified value (equal)
     * boolean !== equal
     *
     * @return {BooleanModel}
     */

  }, {
    key: "falsy",
    value: function falsy() {
      var equal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var check = new _Check.default('falsy', function (value) {
        return value !== equal;
      }, [equal]);
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

  return BooleanModel;
}(_Any.default);

var _default = BooleanModel;
exports.default = _default;