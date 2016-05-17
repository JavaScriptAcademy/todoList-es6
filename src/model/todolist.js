import Todo from './todo';

class TodoList {
  constructor() {
    this._todolist = [];
  }

  getList() {
    return this._todolist;
  }

  addTodo(title) {
    const todo = new Todo(title);

    this._todolist.push(todo);

    return todo;
  }

  findTodoById(id) {
    const todo = this._todolist.find((todoToFind) => {
      return todoToFind.id === id;
    });

    return todo;
  }

  toggleCompleteById(id) {
    const todo = this.findTodoById(id);

    todo.toggleComplete();
  }

  toggleAll() {
    const filteredList = this.getNotCompletedTodos();
    if (filteredList.length === 0) {
      this._todolist.forEach((todo) => {
        this.toggleCompleteById(todo.id);
      });
    } else {
      this.getNotCompletedTodos().forEach((todo) => {
        this.toggleCompleteById(todo.id);
      });
    }
  }

  getNotCompletedTodos() {
    const todos = this.filterListByCompletation(false);

    return todos;
  }

  getCompletedTodos() {
    const todos = this.filterListByCompletation(true);

    return todos;
  }

  filterListByCompletation(isComplete) {
    return this._todolist.filter((todo) => {
      return todo.isComplete === isComplete;
    });
  }

  removeTodoById(id) {
    const index = this._todolist.indexOf(this.findTodoById(id));

    this._todolist.splice(index, 1);
  }

  removeTodosByIds(ids) {
    this._todolist = this._todolist.filter((todo) => {
      return ids.indexOf(todo.id) === -1;
    });
  }

  removeCompletedTodos() {
    this._todolist = this._todolist.filter((todo) => {
      return !todo.isComplete;
    });
  }

  getInfo() {
    const todos = this.getNotCompletedTodos();
    const itemsText = [0, 1].indexOf(todos.length) === -1 ? 'items' : 'item';

    return `${todos.length} ${itemsText} left`;
  }
}

export default TodoList;
