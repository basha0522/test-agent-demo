import { add, subtract } from './math';

describe('add', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  it('should return the correct sum when adding zero', () => {
    expect(add(7, 0)).toBe(7);
    expect(add(0, 7)).toBe(7);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-3, -6)).toBe(-9);
  });

  it('should return zero when both inputs are zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  it('should return the difference when subtracting a negative number', () => {
    expect(subtract(5, -4)).toBe(9);
  });

  it('should return the correct value when subtracting zero', () => {
    expect(subtract(9, 0)).toBe(9);
    expect(subtract(0, 6)).toBe(-6);
  });

  it('should return the difference of two negative numbers', () => {
    expect(subtract(-10, -3)).toBe(-7);
  });

  it('should return zero when both inputs are the same', () => {
    expect(subtract(4, 4)).toBe(0);
    expect(subtract(-5, -5)).toBe(0);
  });
});