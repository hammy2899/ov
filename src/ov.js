// npm
import dotProp from 'dot-prop';

// ov
import Result from './Result';
import Errors from './Errors';
import ValidationError from './ValidationError';
import { isObject, format } from './internals';

// default options
const defaultOptions = {
  validate: {
    noModelPass: true,
  },
};

class ov {
  /**
   * Validate the specified object
   *
   * @param {Object} source The object to validate
   * @param {Blueprint} blueprint The blueprint to use for validation
   * @param {Object} options = {} Options
   * @param {Object} options.noModelPass = true When false if there is no model
   *                 defined for a value in the object the validation will fail
   */
  static validate(source, blueprint, options = defaultOptions.validate) {
    const paths = [];
    const getPaths = (object, prev) => {
      Object.keys(object).forEach((key) => {
        let path = key;
        if (prev !== undefined && prev !== null) {
          path = `${prev}.${key}`;
        }

        if (isObject(object[key])) {
          getPaths(object[key], path);
        } else {
          paths.push(path);
        }
      });
    };

    // get a list of the paths from the source object
    getPaths(source);

    // the object is always valid and has no errors before starting
    // validation process
    let valid = true;
    const errors = [];

    paths.forEach((path) => {
      const model = blueprint.getModel(path);

      if (model instanceof Error) {
        if (options.noModelPass === false) {
          valid = false;
          errors.push(
            new ValidationError(
              `Can\t find a model for '${path}'`,
              path,
            ),
          );
        }
      } else {
        const sourceValue = dotProp.get(source, path);
        const checks = model.getChecksManager().getChecks();

        checks.forEach((check) => {
          if (!check.execute(sourceValue)) {
            valid = false;
            errors.push(
              new ValidationError(
                format.apply(null, [
                  Errors.getError(model, check),
                  path,
                  ...check.getErrorParams(),
                ]),
                path,
                sourceValue,
                model,
                check,
              ),
            );
          }
        });
      }
    });

    return new Result(valid, errors);
  }
}

export default ov;
