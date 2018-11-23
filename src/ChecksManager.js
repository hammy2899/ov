// ov
import Check from './Check';

class ChecksManager {
  constructor() {
    this.checks = [];
    this.options = {};
  }

  /**
   * Add a new check
   *
   * @param {Check} check The name of the check
   * @param {Object|boolean} options Object containing the check options
   */
  check(check, options = false) {
    if (check !== undefined
        && check !== null
        && check instanceof Check) {
      this.checks.push(check);
    } else {
      throw new Error('Check name must be an instance of Check.');
    }

    if (options !== false) {
      if (options
          && typeof options === 'object'
          && options.constructor === Object) {
        this.options[check.getName()] = options;
      } else {
        throw new Error(`Options for '${check.getName()}' must be an object.`);
      }
    }
  }

  /**
   * Get an array of checks
   *
   * @return {Check[]}
   */
  getChecks() {
    return this.checks;
  }

  /**
   * Get the options for the specified check
   *
   * @param {string} checkName The name of the check
   * @return {Object}
   */
  getOptions(checkName) {
    if (checkName !== undefined
        && checkName !== null
        && typeof checkName === 'string'
        && checkName !== '') {
      return this.options[checkName] || {};
    }
    throw new Error('Check name must be a string and can\'t be empty.');
  }
}

export default ChecksManager;
