import { add, subtract } from './math';

describe('add', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(7, -4)).toBe(3);
  });

  it('should return 0 when adding zero to a number', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  it('should handle very large numbers', () => {
    expect(add(1e12, 1e12)).toBe(2e12);
  });
});

describe('subtract', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  it('should return the difference when subtracting a positive and a negative number', () => {
    expect(subtract(10, -5)).toBe(15);
  });

  it('should return 0 when subtracting a number from itself', () => {
    expect(subtract(7, 7)).toBe(0);
  });

  it('should handle edge cases with very large numbers', () => {
    expect(subtract(1e12, 1e11)).toBe(9e11);
  });
});