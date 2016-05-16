import TodoController from './controller/todoController';

document.addEventListener('DOMContentLoaded', () => {
  const todoCtrl = new TodoController();
  todoCtrl.initialize();
});
