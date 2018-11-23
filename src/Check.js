class Check {
  /**
   * Create a new check
   *
   * @param {string} name The name of the check
   * @param {Function<*>} func The function to perform the check
   * @param {Array} errorParams = [] An array of values for error message formatting
   */
  constructor(name, func, errorParams = []) {
    this.name = name;
    this.func = func;
    this.errorParams = errorParams;
  }

  /**
   * Get the check name
   *
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Perform the check on the specified value
   *
   * @param {*} value
   *
   * @returns {boolean} Whether or not the validation check passed
   */
  execute(value) {
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
  getErrorParams() {
    return this.errorParams;
  }
}

export default Check;
