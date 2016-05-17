import Element from './element';

class View {
  static buildTodoItem(todo, itemCallback, removeTodoCallback) {
    const todoLabel = new Element({
      tag: 'label',
      className: 'todo-title',
      html: todo.title,
      id: todo.id,
      eventListener: itemCallback,
    });

    const todoBtn = new Element({
      tag: 'button',
      className: 'destroy',
      eventListener: removeTodoCallback,
    });

    const todoComponent = new Element({
      tag: 'div',
      className: 'todo',
      children: [todoLabel, todoBtn],
    });

    const todoLi = new Element({
      tag: 'li',
      className: todo.isComplete ? 'completed' : '',
      children: [todoComponent],
    });

    return todoLi.node;
  }
}

export default View;
