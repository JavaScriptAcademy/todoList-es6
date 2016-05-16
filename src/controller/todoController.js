import TodoList from '../model/todolist';
import BaseController from './baseController';
import View from '../view/view';

class TodoController extends BaseController {
  initialize() {
    this.addSelectors();
    this.addModel('todolist', new TodoList());

    this.ui.newTodo.addEventListener('keyup', this.addNewTodo.bind(this));
    this.ui.clearCompleted.addEventListener('click', this.clearCompleted.bind(this));
    this.ui.filterCompleted.addEventListener('click', this.filterCompleted.bind(this));
    this.ui.filterAll.addEventListener('click', this.filterAll.bind(this));
    this.ui.filterActive.addEventListener('click', this.filterActive.bind(this));
    this.ui.toggleAll.addEventListener('click', this.toggleAll.bind(this));
    // this.ui.removeTodo.addEventListener('click', this.removeTodo.bind(this));
  }

  addSelectors() {
    this.addSelector('newTodo', '.new-todo');
    this.addSelector('list', '.todo-list');
    this.addSelector('todoCount', '.todo-count');
    this.addSelector('clearCompleted', '.clear-completed');
    this.addSelector('filterCompleted', '.filter-completed');
    this.addSelector('filterActive', '.filter-active');
    this.addSelector('filterAll', '.filter-all');
    this.addSelector('toggleAll', '.toggle-all');
    this.addSelector('removeTodo', '.destroy');
  }

  renderTodo(todo) {
    const todoLi = View.buildTodoItem(todo,
      this.toggleComplete.bind(this),
      this.removeTodo.bind(this));

    this.ui.list.appendChild(todoLi);
  }

  renderTodoList(todolist) {
    const list = todolist || this.model.todolist.getList();

    this.clearTodoList();

    list.forEach((todo) => {
      this.renderTodo(todo);
    });

    this.ui.todoCount.innerText = this.model.todolist.getInfo();
  }

  clearTodoList() {
    this.ui.list.innerHTML = null;
  }

  addNewTodo(event) {
    if (event.keyCode === 13) {
      this.model.todolist.addTodo(event.target.value);

      this.ui.newTodo.value = '';
      this.renderTodoList();
    }
  }

  toggleComplete(event) {
    this.model.todolist.toggleCompleteById(event.target.id);
    this.renderTodoList();
  }

  toggleAll() {
    this.model.todolist.getList().forEach((todo) => {
      this.model.todolist.toggleCompleteById(todo.id);
    });
    this.renderTodoList();
  }

  clearCompleted() {
    this.model.todolist.removeCompletedTodos();
    this.renderTodoList();
    this.renderFilters('filterAll');
  }

  removeTodo(event) {
    this.model.todolist.removeTodoById(event.target.id);
    this.renderTodoList();
  }

  filterCompleted() {
    const filteredList = this.model.todolist.getCompletedTodos();

    this.renderTodoList(filteredList);
    this.renderFilters('filterCompleted');
  }

  filterAll() {
    this.renderTodoList();
    this.renderFilters('filterAll');
  }

  filterActive() {
    const filteredList = this.model.todolist.getNotCompletedTodos();

    this.renderTodoList(filteredList);
    this.renderFilters('filterActive');
  }

  renderFilters(selectedFilter) {
    this.ui.filterActive.className = 'filter-active';
    this.ui.filterAll.className = 'filter-all';
    this.ui.filterCompleted.className = 'filter-completed';

    this.ui[selectedFilter].className += ' selected';
  }
}

export default TodoController;
