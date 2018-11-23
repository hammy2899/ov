// ov
import {
  AnyModel, StringModel, NumberModel,
  DateModel, BooleanModel, ArrayModel,
} from './models';

class Model {
  any() {
    this.model = new AnyModel();
    return this.model;
  }

  string() {
    this.model = new StringModel();
    return this.model;
  }

  number() {
    this.model = new NumberModel();
    return this.model;
  }

  date() {
    this.model = new DateModel();
    return this.model;
  }

  boolean() {
    this.model = new BooleanModel();
    return this.model;
  }

  array() {
    this.model = new ArrayModel();
    return this.model;
  }
}

export default Model;
