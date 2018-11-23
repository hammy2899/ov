// ov
import AnyModel from './Any';
import Check from '../Check';

class StringModel extends AnyModel {
  constructor() {
    super();

    this.checksManager.check(new Check(
      'type',
      value => typeof value === 'string'
        || value instanceof String,
    ));
  }

  /**
   * Check whether or not the string only includes a-z, A-Z and 0-9
   * /^[a-zA-Z0-9\s]+$/
   *
   * @return {StringModel}
   */
  alphanumeric() {
    const check = new Check('alphanumeric', value => new RegExp(/^[a-zA-Z0-9\s]+$/).test(value));

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the string only contains lowercase characters
   * string.toLowercase === value
   *
   * @return {StringModel}
   */
  lowercase() {
    const check = new Check('lowercase', value => value.toLowerCase() === value);

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the string only contains uppercase characters
   * string.toUppercase === value
   *
   * @return {StringModel}
   */
  uppercase() {
    const check = new Check('uppercase', value => value.toUpperCase() === value);

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
  min(limit) {
    const check = new Check('min', value => value.length > limit, [limit]);

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
  max(limit) {
    const check = new Check('max', value => value.length < limit, [limit]);

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
  regex(pattern, flags = '') {
    const regexp = pattern instanceof RegExp
      ? pattern
      : new RegExp(pattern, flags);

    const check = new Check('regex', value => regexp.test(value));

    this.checksManager.check(check);
    return this;
  }

  /**
   * Get the checks manager
   *
   * @return {ChecksManager}
   */
  getChecksManager() {
    return this.checksManager;
  }
}

export default StringModel;
