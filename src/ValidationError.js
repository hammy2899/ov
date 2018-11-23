class ValidationError {
  /**
   * Create a new ValidationError
   *
   * @param {string} message The validation error message
   * @param {string} path The path to the object value with the error
   * @param {*} value The value which caused the error
   * @param {Model} model The model in which the error occurred
   * @param {Check} check The check which threw the error
   */
  constructor(message, path, value = null, model = null, check = null) {
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
  getMessage() {
    return this.message;
  }

  /**
   * Get the path to the object value with the error
   *
   * @return {string}
   */
  getPath() {
    return this.path;
  }

  /**
   * Get the value which caused the error
   *
   * @return {*}
   */
  getValue() {
    return this.value;
  }

  /**
   * Get the model in which the error occurred
   *
   * @return {Model}
   */
  getModel() {
    return this.model;
  }

  /**
   * The check which threw the error
   *
   * @return {Check}
   */
  getCheck() {
    return this.check;
  }
}

export default ValidationError;
