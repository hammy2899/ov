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

var defaultOptions = {
  min: {
    inclusive: true
  },
  max: {
    inclusive: true
  },
  less: {
    inclusive: true
  },
  greater: {
    inclusive: true
  }
};

var ArrayModel =
/*#__PURE__*/
function (_AnyModel) {
  _inherits(ArrayModel, _AnyModel);

  function ArrayModel() {
    var _this;

    _classCallCheck(this, ArrayModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayModel).call(this));

    _this.checksManager.check(new _Check.default('type', function (value) {
      return Array.isArray(value);
    }));

    return _this;
  }
  /**
   * Check whether or not the array length is larger than the minimum specified limit
   * array.length > limit
   * array.length >= limit (inclusive)
   *
   * @param {number} limit
   * @param {Object} options = {}
   * @param {boolean} options.inclusive = true
   *
   * @return {ArrayModel}
   */


  _createClass(ArrayModel, [{
    key: "min",
    value: function min(limit) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions.min;
      var check = new _Check.default('min', function (value) {
        if (options.inclusive) {
          return value.length >= limit;
        }

        return value.length > limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the array length is smaller than the maximum specified limit
     * array.length < limit
     * array.length <= limit (inclusive)
     *
     * @param {number} limit
     * @param {Object} options = {}
     * @param {boolean} options.inclusive = true
     *
     * @return {ArrayModel}
     */

  }, {
    key: "max",
    value: function max(limit) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions.max;
      var check = new _Check.default('max', function (value) {
        if (options.inclusive) {
          return value.length <= limit;
        }

        return value.length < limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the array length is smaller than the specified limit
     * array.length < limit
     * array.length <= limit (inclusive)
     *
     * @param {number} limit
     * @param {Object} options = {}
     * @param {boolean} options.inclusive = true
     *
     * @return {ArrayModel}
     */

  }, {
    key: "lessThan",
    value: function lessThan(limit) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions.less;
      var check = new _Check.default('lessThan', function (value) {
        if (options.inclusive) {
          return value.length <= limit;
        }

        return value.length < limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the array length is larger than the specified limit
     * array.length > limit
     * array.length >= limit (inclusive)
     *
     * @param {number} limit
     * @param {Object} options = {}
     * @param {boolean} options.inclusive = true
     *
     * @return {ArrayModel}
     */

  }, {
    key: "greaterThan",
    value: function greaterThan(limit) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions.greater;
      var check = new _Check.default('greaterThan', function (value) {
        if (options.inclusive) {
          return value.length >= limit;
        }

        return value.length > limit;
      }, [limit]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the array contains the specified item
     * value.indexOf(item) > -1
     *
     * @param {*} item
     *
     * @return {ArrayModel}
     */

  }, {
    key: "has",
    value: function has(item) {
      var check = new _Check.default('has', function (value) {
        return value.indexOf(item) > -1;
      }, [item]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not the array has a value with the instanceof the specified item
     * value.some(v => v instanceof item)
     *
     * @param {*} item
     *
     * @return {ArrayModel}
     */

  }, {
    key: "hasInstanceOf",
    value: function hasInstanceOf(item) {
      var check = new _Check.default('hasInstanceOf', function (value) {
        return value.some(function (v) {
          return v instanceof item;
        });
      }, [item]);
      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not all the array items are the specified type
     * value.every(v => typeof v === type)
     *
     * @param {string} type
     *
     * @return {ArrayModel}
     */

  }, {
    key: "allTypeOf",
    value: function allTypeOf(type) {
      var check = new _Check.default('allTypeOf', function (value) {
        return value.every(function (v) {
          return _typeof(v) === type;
        });
      }, [type]); // eslint-disable-line

      this.checksManager.check(check);
      return this;
    }
    /**
     * Check whether or not all the array items are an instanceof the specified item
     * value.every(v => v instanceof item)
     *
     * @param {*} item
     *
     * @return {ArrayModel}
     */

  }, {
    key: "allInstanceOf",
    value: function allInstanceOf(item) {
      var check = new _Check.default('allInstanceOf', function (value) {
        return value.every(function (v) {
          return v instanceof item;
        });
      }, [item]);
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

  return ArrayModel;
}(_Any.default);

var _default = ArrayModel;
exports.default = _default;