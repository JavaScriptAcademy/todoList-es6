class TodoList {
  constructor() {
    this._todolist = [];
  }

  getList() {
    return this._todolist;
  }

  addTodo(todo) {
    this._todolist.push(todo);
  }
}

export default TodoList;
