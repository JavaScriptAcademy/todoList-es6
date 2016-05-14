import { expect } from 'chai';
import { describe, it } from 'mocha';
import { sum } from '../src/entry';

describe('math operation', () => {
  describe('sum function', () => {
    it('should return 2 when add 1 by 1', () => {
      const result = sum(1, 1);
      expect(result).to.equal(2);
    });
  });
});
