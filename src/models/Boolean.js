// ov
import AnyModel from './Any';
import Check from '../Check';

class BooleanModel extends AnyModel {
  /**
   * Check whether or not the boolean is truthy to the specified value (equal)
   * boolean === equal
   *
   * @return {BooleanModel}
   */
  truthy(equal = true) {
    const check = new Check('truthy', value => value === equal, [equal]);

    this.checksManager.check(check);
    return this;
  }

  /**
   * Check whether or not the boolean is falsy to the specified value (equal)
   * boolean !== equal
   *
   * @return {BooleanModel}
   */
  falsy(equal = true) {
    const check = new Check('falsy', value => value !== equal, [equal]);

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

export default BooleanModel;
