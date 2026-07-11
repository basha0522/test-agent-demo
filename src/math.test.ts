import { add, subtract } from './math';

describe('add', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  it('should return the correct sum when one of the numbers is zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  it('should return zero when both arguments are zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract(8, 3)).toBe(5);
  });

  it('should return the difference of a positive and a negative number', () => {
    expect(subtract(10, -5)).toBe(15);
  });

  it('should return the correct result when subtracting zero', () => {
    expect(subtract(7, 0)).toBe(7);
  });

  it('should return zero when both arguments are the same', () => {
    expect(subtract(4, 4)).toBe(0);
  });
});