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

class NumberModel extends AnyModel {
  constructor() {
    super();

    this.checksManager.check(new Check(
      'type',
      value => typeof value === 'number'
        || value instanceof Number,
    ));
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
  min(limit, options = defaultOptions.min) {
    const check = new Check('min', (value) => {
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
  max(limit, options = defaultOptions.max) {
    const check = new Check('max', (value) => {
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
  lessThan(limit, options = defaultOptions.less) {
    const check = new Check('lessThan', (value) => {
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
  greaterThan(limit, options = defaultOptions.greater) {
    const check = new Check('greaterThan', (value) => {
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
  integer() {
    const check = new Check('integer', value => Number.isInteger(value));

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the number is a decimal value
   * Math.floor(value) !== value
   *
   * @return {NumberModel}
   */
  decimal() {
    const check = new Check('decimal', value => Math.floor(value) !== value);

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the number is a positive value
   * Math.sign(value) !== -1
   *
   * @return {NumberModel}
   */
  positive() {
    const check = new Check('positive', value => Math.sign(value) !== -1);

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the number is a negative value
   * Math.sign(value) === -1
   *
   * @return {NumberModel}
   */
  negative() {
    const check = new Check('negative', value => Math.sign(value) === -1);

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

export default NumberModel;
