import { add, addition, subtract, division, multiply, multi50, multi75, multi100 } from './math';

describe('Math functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(3, 5)).toBe(8);
    });

    it('should handle adding zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(add(-3, -5)).toBe(-8);
    });
  });

  describe('addition', () => {
    it('should add two positive numbers and 50', () => {
      expect(addition(3, 5)).toBe(58);
    });

    it('should handle adding zero and 50', () => {
      expect(addition(0, 0)).toBe(50);
    });

    it('should add two negative numbers and 50', () => {
      expect(addition(-3, -5)).toBe(42);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    it('should handle subtraction resulting in zero', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    it('should subtract a larger number from a smaller one (negative result)', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe('division', () => {
    it('should divide two positive numbers and multiply by 50', () => {
      expect(division(10, 2)).toBe(250);
    });

    it('should handle division by a smaller positive number', () => {
      expect(division(2, 10)).toBe(10);
    });

    it('should handle division by zero (edge case)', () => {
      expect(() => division(10, 0)).toThrow();
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('should handle multiplication with zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should multiply a negative and a positive number', () => {
      expect(multiply(-4, 5)).toBe(-20);
    });
  });

  describe('multi50', () => {
    it('should multiply two positive numbers and multiply by 50', () => {
      expect(multi50(2, 3)).toBe(300);
    });

    it('should handle multiplication with zero', () => {
      expect(multi50(0, 5)).toBe(0);
    });

    it('should multiply two negative numbers and multiply by 50', () => {
      expect(multi50(-2, -3)).toBe(300);
    });
  });

  describe('multi75', () => {
    it('should multiply two positive numbers and multiply by 75', () => {
      expect(multi75(2, 3)).toBe(450);
    });

    it('should handle multiplication with zero', () => {
      expect(multi75(0, 5)).toBe(0);
    });

    it('should multiply a negative and a positive number and multiply by 75', () => {
      expect(multi75(-2, 3)).toBe(-450);
    });
  });

  describe('multi100', () => {
    it('should multiply two positive numbers and multiply by 100', () => {
      expect(multi100(2, 3)).toBe(600);
    });

    it('should handle multiplication with zero', () => {
      expect(multi100(0, 5)).toBe(0);
    });

    it('should multiply a negative and a positive number and multiply by 100', () => {
      expect(multi100(-2, 3)).toBe(-600);
    });
  });
});