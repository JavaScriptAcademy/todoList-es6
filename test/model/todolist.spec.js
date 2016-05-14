import { expect } from 'chai';
import { describe, it } from 'mocha';
import TodoList from '../../src/model/todolist';
import Todo from '../../src/model/todo';

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
      const todo = new Todo('test');
      const todolist = new TodoList();
      todolist.addTodo(todo);
      expect(todolist.getList().length).to.equal(1);
      expect(todolist.getList()).to.include(todo);
    });
  });

  // describe('toggle todo complete status', () =>{
  //   it('should be able to change todo complete to true when it is false', ()=>{
  //   });
  // });
});
