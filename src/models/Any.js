// ov
import ChecksManager from '../ChecksManager';
import Check from '../Check';
import { isObject } from '../internals';

class AnyModel {
  constructor() {
    this.checksManager = new ChecksManager();
  }

  /**
   * Check whether or not the value exists (is in the object)
   * value !== undefined
   *
   * @return {AnyModel}
   */
  exists() {
    const check = new Check('exists', value => value !== undefined);

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the value is empty
   *
   * @return {AnyModel}
   */
  notEmpty() {
    const check = new Check('notEmpty', (value) => {
      if (isObject(value)) {
        return Object.keys(value).length > -1;
      }

      if (Array.isArray(value)) {
        return value.length > -1;
      }

      if (typeof value === 'number') {
        return true;
      }

      if (typeof value === 'string') {
        return value.length > -1;
      }

      return false;
    });

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

export default AnyModel;
