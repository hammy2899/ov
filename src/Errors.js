const errors = {
  string: {
    type: '\'{0}\' must be a String type',
    alphanumeric: '\'{0}\' can only contain a-z, A-Z and 0-9',
    lowercase: '\'{0}\' can only contain lowercase characters',
    uppercase: '\'{0}\' can only contain uppercase characters',
    min: '\'{0}\' has too few characters. Minimum length is {1}',
    max: '\'{0}\' has too many characters. Maximum length is {1}',
    regex: '\'{0}\' didn\'t match the specified regex pattern',
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
    negative: '\'{0}\' is a positive number',
  },
  date: {
    type: '\'{0}\' must be a Date type',
    min: '\'{0}\' is smaller than {1}',
    max: '\'{0}\' is larger than {1}',
    lessThan: '\'{0}\' is larger than {1}',
    greaterThan: '\'{0}\' is smaller than {1}',
  },
  boolean: {
    truthy: '\'{0}\' doesn\'t equal {1}',
    falsy: '\'{0}\' is equal to {1}',
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
    allInstanceOf: '\'{0}\' has an entry which isn\'t an instance of \'{1}\'',
  },
  getError: function getErrorMessage(model, check) {
    // get the model type String, Number etc.
    let typeName = model.constructor.name.toLowerCase();

    // remove the last 5 chars from the name (removes "model" from the end)
    typeName = typeName.slice(0, typeName.length - 5);

    // get the check error message
    return errors[typeName][check.getName()];
  },
};

export default errors;
