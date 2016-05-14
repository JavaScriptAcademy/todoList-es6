import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Todo from '../../src/model/todo';

describe('todo', () => {
  describe('initialization', () => {
    // it.('should throw an error if title is empty', () => {
    //   expect(new Todo()).to.throw(error);
    // });

    it('should initialize an todo with a string and default not complete', () => {
      const todo = new Todo('test');
      expect(todo.title).to.equal('test');
      expect(todo.isComplete).to.be.false;
    });

    it('should initialize title if pass a string to constructor', () => {
      const todo = new Todo('test');
      expect(todo.title).to.equal('test');
    });

    it('should be able to get id after initialization', () => {
      const todo = new Todo('test');
      expect(todo.id).to.not.be.empty;
    });

    it('should create two todo with different id', () => {
      const todo1 = new Todo('test');
      const todo2 = new Todo('test');
      expect(todo1.id === todo2.id).to.be.false;
    });
  });

  describe('toggleComplete function', () => {
    let todo;

    beforeEach(() => {
      todo = new Todo('test');
    });

    it('should be able to set isComplete to true when it is false', () => {
      todo.toggleComplete();
      expect(todo.isComplete).to.be.true;
    });

    it('should be able to set isComplete to false when it is true', () => {
      todo.toggleComplete();
      todo.toggleComplete();
      expect(todo.isComplete).to.be.false;
    });
  });
});
