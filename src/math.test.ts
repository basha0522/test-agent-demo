// math.test.ts
import { add, addition, subtract, division, multiply, multi50, multi75, multi100, multi200 } from './math';

describe('math functions', () => {
  describe('add', () => {
    it('should correctly add two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle edge case of adding zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('addition', () => {
    it('should correctly add two numbers and add 50', () => {
      expect(addition(2, 3)).toBe(55);
    });

    it('should handle edge case of adding zero', () => {
      expect(addition(0, 0)).toBe(50);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should handle edge case of subtracting a larger number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });

  describe('division', () => {
    it('should correctly divide two numbers and multiply by 50', () => {
      expect(division(10, 2)).toBe(250);
    });

    it('should handle edge case of division by zero', () => {
      expect(() => division(10, 0)).toThrow();
    });
  });

  describe('multiply', () => {
    it('should correctly multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should handle edge case of multiplying by zero', () => {
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('multi50', () => {
    it('should correctly multiply two numbers and multiply by 50', () => {
      expect(multi50(2, 3)).toBe(300);
    });

    it('should handle edge case of multiplying by zero', () => {
      expect(multi50(0, 5)).toBe(0);
    });
  });

  describe('multi75', () => {
    it('should correctly multiply two numbers and multiply by 75', () => {
      expect(multi75(2, 3)).toBe(450);
    });

    it('should handle edge case of multiplying by zero', () => {
      expect(multi75(0, 5)).toBe(0);
    });
  });

  describe('multi100', () => {
    it('should correctly multiply two numbers and multiply by 100', () => {
      expect(multi100(2, 3)).toBe(600);
    });

    it('should handle edge case of multiplying by zero', () => {
      expect(multi100(0, 5)).toBe(0);
    });
  });

  describe('multi200', () => {
    it('should correctly multiply two numbers and multiply by 200', () => {
      expect(multi200(2, 3)).toBe(1200);
    });

    it('should handle edge case of multiplying by zero', () => {
      expect(multi200(0, 5)).toBe(0);
    });
  });
});