"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotProp = _interopRequireDefault(require("dot-prop"));

var _Result = _interopRequireDefault(require("./Result"));

var _Errors = _interopRequireDefault(require("./Errors"));

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

var _internals = require("./internals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// default options
var defaultOptions = {
  validate: {
    noModelPass: true
  }
};

var ov =
/*#__PURE__*/
function () {
  function ov() {
    _classCallCheck(this, ov);
  }

  _createClass(ov, null, [{
    key: "validate",

    /**
     * Validate the specified object
     *
     * @param {Object} source The object to validate
     * @param {Blueprint} blueprint The blueprint to use for validation
     * @param {Object} options = {} Options
     * @param {Object} options.noModelPass = true When false if there is no model
     *                 defined for a value in the object the validation will fail
     */
    value: function validate(source, blueprint) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions.validate;
      var paths = [];

      var getPaths = function getPaths(object, prev) {
        Object.keys(object).forEach(function (key) {
          var path = key;

          if (prev !== undefined && prev !== null) {
            path = "".concat(prev, ".").concat(key);
          }

          if ((0, _internals.isObject)(object[key])) {
            getPaths(object[key], path);
          } else {
            paths.push(path);
          }
        });
      }; // get a list of the paths from the source object


      getPaths(source); // the object is always valid and has no errors before starting
      // validation process

      var valid = true;
      var errors = [];
      paths.forEach(function (path) {
        var model = blueprint.getModel(path);

        if (model instanceof Error) {
          if (options.noModelPass === false) {
            valid = false;
            errors.push(new _ValidationError.default("Can\t find a model for '".concat(path, "'"), path));
          }
        } else {
          var sourceValue = _dotProp.default.get(source, path);

          var checks = model.getChecksManager().getChecks();
          checks.forEach(function (check) {
            if (!check.execute(sourceValue)) {
              valid = false;
              errors.push(new _ValidationError.default(_internals.format.apply(null, [_Errors.default.getError(model, check), path].concat(_toConsumableArray(check.getErrorParams()))), path, sourceValue, model, check));
            }
          });
        }
      });
      return new _Result.default(valid, errors);
    }
  }]);

  return ov;
}();

var _default = ov;
exports.default = _default;