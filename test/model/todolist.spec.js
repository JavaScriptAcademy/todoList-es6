import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import TodoList from '../../src/model/todolist';

describe('todolist', () => {
  describe('initialize todolist', () => {
    it('should get an empty array by default', () => {
      const todolist = new TodoList();

      expect(todolist.getList()).to.be.a('array');
      expect(todolist.getList()).to.empty;
    });
  });

  describe('add todo to list', () => {
    it('should add an todo object to list', () => {
      const todolist = new TodoList();
      todolist.addTodo('new todo');

      expect(todolist.getList().length).to.equal(1);
      expect(todolist.getList()[0].title).to.equal('new todo');
    });
  });

  describe('complete status', () => {
    let todolist;

    beforeEach(() => {
      todolist = new TodoList();
      todolist.addTodo('new todo');
    });

    it('should be able to find todo by id', () => {
      const todo = todolist.findTodoById(todolist.getList()[0].id);

      expect(todo.title).to.equal('new todo');
    });

    describe('toggle complete', () => {
      beforeEach(() => {
        todolist.toggleCompleteById(todolist.getList()[0].id);
      });

      it('should be able to change complete status to true when it is false', () => {
        expect(todolist.getList()[0].isComplete).to.equal(true);
      });

      it('should be able to change complete status to false when it is true', () => {
        todolist.toggleCompleteById(todolist.getList()[0].id);

        expect(todolist.getList()[0].isComplete).to.equal(false);
      });
    });

    describe('filter todolist', () => {
      let todos;

      beforeEach(() => {
        todolist.addTodo('new todo2');
        todolist.toggleCompleteById(todolist.getList()[1].id);
      });

      it('should be bale to get all todo which is not completed', () => {
        todos = todolist.getNotCompletedTodos();

        expect(todos.length).to.equal(1);
        expect(todos[0].title).to.equal('new todo');
      });

      it('should be bale to get all todo which is completed', () => {
        todos = todolist.getCompletedTodos();

        expect(todos.length).to.equal(1);
        expect(todos[0].title).to.equal('new todo2');
      });
    });

    describe('info about how many todos left to complete', () => {
      it('should show singular when only 1 todo left', () => {
        const info = todolist.getInfo();

        expect(info).to.equal('1 item left');
      });

      it('should show plural when more then 2 todos left', () => {
        let info = '';

        todolist.addTodo('new todo1');
        info = todolist.getInfo();

        expect(info).to.equal('2 items left');
      });
    });
  });

  describe('remove todos', () => {
    let todolist;

    beforeEach(() => {
      todolist = new TodoList();
      todolist.addTodo('new todo');
      todolist.addTodo('new todo1');
    });

    it('should be able to remove a todo by id', () => {
      const todo = todolist.getList()[0];

      todolist.removeTodoById(todo.id);

      expect(todolist.getList().length).to.equal(1);
      expect(todolist.getList()[0].title).to.equal('new todo1');
    });

    it('should be able to remove many todos by their ids', () => {
      let ids = [];

      todolist.addTodo('new todo2');
      ids = [todolist.getList()[0].id, todolist.getList()[2].id];
      todolist.removeTodosByIds(ids);

      expect(todolist.getList().length).to.equal(1);
      expect(todolist.getList()[0].title).to.equal('new todo1');
    });

    it('should be able to remove all completed todos', () => {
      todolist.addTodo('new todo2');
      todolist.toggleCompleteById(todolist.getList()[0].id);
      todolist.toggleCompleteById(todolist.getList()[2].id);
      todolist.removeCompletedTodos();

      expect(todolist.getList().length).to.equal(1);
      expect(todolist.getList()[0].title).to.equal('new todo1');
    });
  });
});
