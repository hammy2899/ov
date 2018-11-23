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

class DateModel extends AnyModel {
  constructor() {
    super();

    this.checksManager.check(new Check(
      'type',
      value => value instanceof Date,
    ));
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
  min(limit, options = defaultOptions.min) {
    const check = new Check('min', (value) => {
      let date = limit;
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
  max(limit, options = defaultOptions.max) {
    const check = new Check('max', (value) => {
      let date = limit;
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
  lessThan(limit, options = defaultOptions.less) {
    const check = new Check('lessThan', (value) => {
      let date = limit;
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
  greaterThan(limit, options = defaultOptions.greater) {
    const check = new Check('greaterThan', (value) => {
      let date = limit;
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
  getChecksManager() {
    return this.checksManager;
  }
}

export default DateModel;
