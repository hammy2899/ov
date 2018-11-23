// npm
import dotProp from 'dot-prop';

class Blueprint {
  constructor(structure) {
    this.structure = structure;
  }

  /**
   * Get the validation model for the specified object path
   *
   * @param {string} path Object path to model
   *
   * @return {*}
   */
  getModel(path) {
    const model = dotProp.get(this.structure, path, null);

    return model === null ? new Error('Couldn\'t find specified model') : model;
  }
}

export default Blueprint;
