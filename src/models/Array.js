// ov
import AnyModel from './Any';
import Check from '../Check';

const defaultOptions = {
  min: {
    inclusive: true,
  },
  max: {
    inclusive: true,
  },
  less: {
    inclusive: true,
  },
  greater: {
    inclusive: true,
  },
};

class ArrayModel extends AnyModel {
  constructor() {
    super();

    this.checksManager.check(new Check(
      'type',
      value => Array.isArray(value),
    ));
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
  min(limit, options = defaultOptions.min) {
    const check = new Check('min', (value) => {
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
  max(limit, options = defaultOptions.max) {
    const check = new Check('max', (value) => {
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
  lessThan(limit, options = defaultOptions.less) {
    const check = new Check('lessThan', (value) => {
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
  greaterThan(limit, options = defaultOptions.greater) {
    const check = new Check('greaterThan', (value) => {
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
  has(item) {
    const check = new Check('has', value => value.indexOf(item) > -1, [item]);

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
  hasInstanceOf(item) {
    const check = new Check('hasInstanceOf', value => value.some(v => v instanceof item), [item]);

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
  allTypeOf(type) {
    const check = new Check('allTypeOf', value => value.every(v => typeof v === type), [type]); // eslint-disable-line

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
  allInstanceOf(item) {
    const check = new Check('allInstanceOf', value => value.every(v => v instanceof item), [item]);

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

export default ArrayModel;
