class BaseController {
  constructor() {
    this._ui = {};
    this._model = {};
  }

  get ui() {
    return this._ui;
  }

  get model() {
    return this._model;
  }

  addSelector(key, value) {
    this._ui[key] = document.querySelector(value);
  }

  addModel(key, value) {
    this._model[key] = value;
  }
}

export default BaseController;
