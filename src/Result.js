class Result {
  constructor(valid, errors = []) {
    this.valid = valid;
    this.errors = errors;
  }

  /**
   * Check whether or not the object is valid
   *
   * @return {boolean}
   */
  isValid() {
    return this.valid === true;
  }

  /**
   * Check whether or not there was an error
   *
   * @return {boolean}
   */
  hasErrors() {
    return this.errors.length > 0;
  }

  /**
   * Get the validation errors if there was any
   *
   * @return {*}
   */
  getErrors() {
    return this.errors;
  }
}

export default Result;
