(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.OV = {})));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
  };

  function getPathSegments(path) {
    const pathArr = path.split('.');
    const parts = [];

    for (let i = 0; i < pathArr.length; i++) {
      let p = pathArr[i];

      while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
        p = p.slice(0, -1) + '.';
        p += pathArr[++i];
      }

      parts.push(p);
    }

    return parts;
  }

  var dotProp = {
    get(obj, path, value) {
      if (!isObj(obj) || typeof path !== 'string') {
        return value === undefined ? obj : value;
      }

      const pathArr = getPathSegments(path);

      for (let i = 0; i < pathArr.length; i++) {
        if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
          return value;
        }

        obj = obj[pathArr[i]];

        if (obj === undefined || obj === null) {
          // `obj` is either `undefined` or `null` so we want to stop the loop, and
          // if this is not the last bit of the path, and
          // if it did't return `undefined`
          // it would return `null` if `obj` is `null`
          // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
          if (i !== pathArr.length - 1) {
            return value;
          }

          break;
        }
      }

      return obj;
    },

    set(obj, path, value) {
      if (!isObj(obj) || typeof path !== 'string') {
        return obj;
      }

      const root = obj;
      const pathArr = getPathSegments(path);

      for (let i = 0; i < pathArr.length; i++) {
        const p = pathArr[i];

        if (!isObj(obj[p])) {
          obj[p] = {};
        }

        if (i === pathArr.length - 1) {
          obj[p] = value;
        }

        obj = obj[p];
      }

      return root;
    },

    delete(obj, path) {
      if (!isObj(obj) || typeof path !== 'string') {
        return;
      }

      const pathArr = getPathSegments(path);

      for (let i = 0; i < pathArr.length; i++) {
        const p = pathArr[i];

        if (i === pathArr.length - 1) {
          delete obj[p];
          return;
        }

        obj = obj[p];

        if (!isObj(obj)) {
          return;
        }
      }
    },

    has(obj, path) {
      if (!isObj(obj) || typeof path !== 'string') {
        return false;
      }

      const pathArr = getPathSegments(path);

      for (let i = 0; i < pathArr.length; i++) {
        if (isObj(obj)) {
          if (!(pathArr[i] in obj)) {
            return false;
          }

          obj = obj[pathArr[i]];
        } else {
          return false;
        }
      }

      return true;
    }

  };

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

  var errors = {
    string: {
      type: '\'{0}\' must be a String type',
      alphanumeric: '\'{0}\' can only contain a-z, A-Z and 0-9',
      lowercase: '\'{0}\' can only contain lowercase characters',
      uppercase: '\'{0}\' can only contain uppercase characters',
      min: '\'{0}\' has too few characters. Minimum length is {1}',
      max: '\'{0}\' has too many characters. Maximum length is {1}',
      regex: '\'{0}\' didn\'t match the specified regex pattern'
    },
    number: {
      type: '\'{0}\' must be a Number type',
      min: '\'{0}\' is smaller than {1}',
      max: '\'{0}\' is larger than {1}',
      lessThan: '\'{0}\' is larger than {1}',
      greaterThan: '\'{0}\' is smaller than {1}',
      integer: '\'{0}\' is not an integer',
      decimal: '\'{0}\' is not a decimal',
      positive: '\'{0}\' is a negative number',
      negative: '\'{0}\' is a positive number'
    },
    date: {
      type: '\'{0}\' must be a Date type',
      min: '\'{0}\' is smaller than {1}',
      max: '\'{0}\' is larger than {1}',
      lessThan: '\'{0}\' is larger than {1}',
      greaterThan: '\'{0}\' is smaller than {1}'
    },
    boolean: {
      truthy: '\'{0}\' doesn\'t equal {1}',
      falsy: '\'{0}\' is equal to {1}'
    },
    array: {
      type: '\'{0}\' must be a Array type',
      min: '\'{0}\' size is smaller than {1}',
      max: '\'{0}\' size is larger than {1}',
      lessThan: '\'{0}\' size is larger than {1}',
      greaterThan: '\'{0}\' size is smaller than {1}',
      has: '\'{0}\' doesn\'t contain \'{1}\'',
      hasInstanceOf: '\'{0}\' doesn\'t have an instance of \'{1}\'',
      allTypeOf: '\'{0}\' has an entry which isn\'t a type of \'{1}\'',
      allInstanceOf: '\'{0}\' has an entry which isn\'t an instance of \'{1}\''
    },
    getError: function getErrorMessage(model, check) {
      // get the model type String, Number etc.
      var typeName = model.constructor.name.toLowerCase(); // remove the last 5 chars from the name (removes "model" from the end)

      typeName = typeName.slice(0, typeName.length - 5); // get the check error message

      return errors[typeName][check.getName()];
    }
  };

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

  function isObject(object) {
    return object && _typeof(object) === 'object' && object.constructor === Object;
  }

  function format(string) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var a = string;
    args.forEach(function (k, i) {
      var arg = '';

      if (typeof args[i] === 'function') {
        arg = args[i].name;
      } else {
        arg = args[i].toString();
      }

      a = a.replace(new RegExp("\\{".concat(i, "}"), 'g'), arg);
    });
    return a;
  }

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

            if (isObject(object[key])) {
              getPaths(object[key], path);
            } else {
              paths.push(path);
            }
          });
        }; // get a list of the paths from the source object


        getPaths(source); // the object is always valid and has no errors before starting
        // validation process

        var valid = true;
        var errors$$1 = [];
        paths.forEach(function (path) {
          var model = blueprint.getModel(path);

          if (model instanceof Error) {
            if (options.noModelPass === false) {
              valid = false;
              errors$$1.push(new ValidationError("Can\t find a model for '".concat(path, "'"), path));
            }
          } else {
            var sourceValue = dotProp.get(source, path);
            var checks = model.getChecksManager().getChecks();
            checks.forEach(function (check) {
              if (!check.execute(sourceValue)) {
                valid = false;
                errors$$1.push(new ValidationError(format.apply(null, [errors.getError(model, check), path].concat(_toConsumableArray(check.getErrorParams()))), path, sourceValue, model, check));
              }
            });
          }
        });
        return new Result(valid, errors$$1);
      }
    }]);

    return ov;
  }();

  var Blueprint =
  /*#__PURE__*/
  function () {
    function Blueprint(structure) {
      _classCallCheck(this, Blueprint);

      this.structure = structure;
    }
    /**
     * Get the validation model for the specified object path
     *
     * @param {string} path Object path to model
     *
     * @return {*}
     */


    _createClass(Blueprint, [{
      key: "getModel",
      value: function getModel(path) {
        var model = dotProp.get(this.structure, path, null);
        return model === null ? new Error('Couldn\'t find specified model') : model;
      }
    }]);

    return Blueprint;
  }();

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

        if (_check !== undefined && _check !== null && _check instanceof Check) {
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

  var AnyModel =
  /*#__PURE__*/
  function () {
    function AnyModel() {
      _classCallCheck(this, AnyModel);

      this.checksManager = new ChecksManager();
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
        var check = new Check('exists', function (value) {
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
        var check = new Check('notEmpty', function (value) {
          if (isObject(value)) {
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

  var StringModel =
  /*#__PURE__*/
  function (_AnyModel) {
    _inherits(StringModel, _AnyModel);

    function StringModel() {
      var _this;

      _classCallCheck(this, StringModel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(StringModel).call(this));

      _this.checksManager.check(new Check('type', function (value) {
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
        var check = new Check('alphanumeric', function (value) {
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
        var check = new Check('lowercase', function (value) {
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
        var check = new Check('uppercase', function (value) {
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
        var check = new Check('min', function (value) {
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
        var check = new Check('max', function (value) {
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
        var check = new Check('regex', function (value) {
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
  }(AnyModel);

  var defaultOptions$1 = {
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

  var NumberModel =
  /*#__PURE__*/
  function (_AnyModel) {
    _inherits(NumberModel, _AnyModel);

    function NumberModel() {
      var _this;

      _classCallCheck(this, NumberModel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberModel).call(this));

      _this.checksManager.check(new Check('type', function (value) {
        return typeof value === 'number' || value instanceof Number;
      }));

      return _this;
    }
    /**
     * Check whether or not the number is larger than the minimum specified limit
     * number > limit
     * number >= limit (inclusive)
     *
     * @param {number} limit
     * @param {Object} options = {}
     * @param {boolean} options.inclusive = true
     *
     * @return {NumberModel}
     */


    _createClass(NumberModel, [{
      key: "min",
      value: function min(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$1.min;
        var check = new Check('min', function (value) {
          if (options.inclusive) {
            return value >= limit;
          }

          return value > limit;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is smaller than the maximum specified limit
       * number < limit
       * number <= limit (inclusive)
       *
       * @param {number} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {NumberModel}
       */

    }, {
      key: "max",
      value: function max(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$1.max;
        var check = new Check('max', function (value) {
          if (options.inclusive) {
            return value <= limit;
          }

          return value < limit;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is smaller than the specified limit
       * number < limit
       * number <= limit (inclusive)
       *
       * @param {number} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {NumberModel}
       */

    }, {
      key: "lessThan",
      value: function lessThan(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$1.less;
        var check = new Check('lessThan', function (value) {
          if (options.inclusive) {
            return value <= limit;
          }

          return value < limit;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is larger than the specified limit
       * number > limit
       * number >= limit (inclusive)
       *
       * @param {number} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {NumberModel}
       */

    }, {
      key: "greaterThan",
      value: function greaterThan(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$1.greater;
        var check = new Check('greaterThan', function (value) {
          if (options.inclusive) {
            return value >= limit;
          }

          return value > limit;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is an integer (no floating point)
       * Number.isInteger(value)
       *
       * @return {NumberModel}
       */

    }, {
      key: "integer",
      value: function integer() {
        var check = new Check('integer', function (value) {
          return Number.isInteger(value);
        });
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is a decimal value
       * Math.floor(value) !== value
       *
       * @return {NumberModel}
       */

    }, {
      key: "decimal",
      value: function decimal() {
        var check = new Check('decimal', function (value) {
          return Math.floor(value) !== value;
        });
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is a positive value
       * Math.sign(value) !== -1
       *
       * @return {NumberModel}
       */

    }, {
      key: "positive",
      value: function positive() {
        var check = new Check('positive', function (value) {
          return Math.sign(value) !== -1;
        });
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the number is a negative value
       * Math.sign(value) === -1
       *
       * @return {NumberModel}
       */

    }, {
      key: "negative",
      value: function negative() {
        var check = new Check('negative', function (value) {
          return Math.sign(value) === -1;
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

    return NumberModel;
  }(AnyModel);

  var defaultOptions$2 = {
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

  var DateModel =
  /*#__PURE__*/
  function (_AnyModel) {
    _inherits(DateModel, _AnyModel);

    function DateModel() {
      var _this;

      _classCallCheck(this, DateModel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateModel).call(this));

      _this.checksManager.check(new Check('type', function (value) {
        return value instanceof Date;
      }));

      return _this;
    }
    /**
     * Check whether or not the date is larger than the minimum specified limit
     * date > limit
     * date >= limit (inclusive)
     *
     * @param {string|Date} limit
     * @param {Object} options = {}
     * @param {boolean} options.inclusive = true
     *
     * @return {DateModel}
     */


    _createClass(DateModel, [{
      key: "min",
      value: function min(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$2.min;
        var check = new Check('min', function (value) {
          var date = limit;

          if (typeof limit === 'string') {
            date = new Date(limit);
          }

          if (options.inclusive) {
            return value >= date;
          }

          return value > date;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the date is smaller than the maximum specified limit
       * date < limit
       * date <= limit (inclusive)
       *
       * @param {string|Date} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {DateModel}
       */

    }, {
      key: "max",
      value: function max(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$2.max;
        var check = new Check('max', function (value) {
          var date = limit;

          if (typeof limit === 'string') {
            date = new Date(limit);
          }

          if (options.inclusive) {
            return value <= date;
          }

          return value < date;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the date is smaller than the specified limit
       * date < limit
       * date <= limit (inclusive)
       *
       * @param {string|Date} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {DateModel}
       */

    }, {
      key: "lessThan",
      value: function lessThan(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$2.less;
        var check = new Check('lessThan', function (value) {
          var date = limit;

          if (typeof limit === 'string') {
            date = new Date(limit);
          }

          if (options.inclusive) {
            return value <= date;
          }

          return value < date;
        }, [limit]);
        this.checksManager.check(check);
        return this;
      }
      /**
       * Check whether or not the date is larger than the specified limit
       * date > limit
       * date >= limit (inclusive)
       *
       * @param {string|Date} limit
       * @param {Object} options = {}
       * @param {boolean} options.inclusive = true
       *
       * @return {DateModel}
       */

    }, {
      key: "greaterThan",
      value: function greaterThan(limit) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$2.greater;
        var check = new Check('greaterThan', function (value) {
          var date = limit;

          if (typeof limit === 'string') {
            date = new Date(limit);
          }

          if (options.inclusive) {
            return value >= date;
          }

          return value > date;
        }, [limit]);
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

    return DateModel;
  }(AnyModel);

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
        var check = new Check('truthy', function (value) {
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
        var check = new Check('falsy', function (value) {
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
  }(AnyModel);

  var defaultOptions$3 = {
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

      _this.checksManager.check(new Check('type', function (value) {
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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$3.min;
        var check = new Check('min', function (value) {
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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$3.max;
        var check = new Check('max', function (value) {
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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$3.less;
        var check = new Check('lessThan', function (value) {
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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions$3.greater;
        var check = new Check('greaterThan', function (value) {
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
        var check = new Check('has', function (value) {
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
        var check = new Check('hasInstanceOf', function (value) {
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
        var check = new Check('allTypeOf', function (value) {
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
        var check = new Check('allInstanceOf', function (value) {
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
  }(AnyModel);

  // models

  var Model =
  /*#__PURE__*/
  function () {
    function Model() {
      _classCallCheck(this, Model);
    }

    _createClass(Model, [{
      key: "any",
      value: function any() {
        this.model = new AnyModel();
        return this.model;
      }
    }, {
      key: "string",
      value: function string() {
        this.model = new StringModel();
        return this.model;
      }
    }, {
      key: "number",
      value: function number() {
        this.model = new NumberModel();
        return this.model;
      }
    }, {
      key: "date",
      value: function date() {
        this.model = new DateModel();
        return this.model;
      }
    }, {
      key: "boolean",
      value: function boolean() {
        this.model = new BooleanModel();
        return this.model;
      }
    }, {
      key: "array",
      value: function array() {
        this.model = new ArrayModel();
        return this.model;
      }
    }]);

    return Model;
  }();

  // ov libs

  exports.ov = ov;
  exports.Blueprint = Blueprint;
  exports.Model = Model;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
