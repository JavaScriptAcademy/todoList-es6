import { generateUID } from '../helper/helper';

class Todo {
  constructor(title) {
    this._id = generateUID();
    this._title = title;
    this._isComplete = false;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get isComplete() {
    return this._isComplete;
  }

  toggleComplete() {
    this._isComplete = !this._isComplete;
  }
}

export default Todo;
