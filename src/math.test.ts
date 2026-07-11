import { add, subtract } from './math';

describe('add', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-7, -2)).toBe(-9);
  });

  it('should return zero when adding zero to zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('should return the difference of a positive and a negative number', () => {
    expect(subtract(8, -3)).toBe(11);
  });

  it('should return the difference of two negative numbers', () => {
    expect(subtract(-5, -9)).toBe(4);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(subtract(7, 7)).toBe(0);
  });
});