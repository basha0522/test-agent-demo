import { add, addition, subtract, division, multiply, multi50, multi75, multi100, multi200, multi300 } from './math';

describe('math module', () => {
  test('add - normal cases', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 5)).toBe(4);
    expect(add(0, 0)).toBe(0);
  });

  test('add - edge case', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  test('addition - normal cases', () => {
    expect(addition(2, 3)).toBe(55);
    expect(addition(-5, 5)).toBe(50);
    expect(addition(0, 0)).toBe(50);
  });

  test('addition - edge case', () => {
    expect(addition(Number.MIN_SAFE_INTEGER, 0)).toBe(Number.MIN_SAFE_INTEGER + 50);
  });

  test('subtract - normal cases', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 4)).toBe(-4);
  });

  test('subtract - edge case', () => {
    expect(subtract(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER);
  });

  test('division - normal cases', () => {
    expect(division(10, 2)).toBe(250);
    expect(division(20, 4)).toBe(250);
    expect(division(0, 1)).toBe(0);
  });

  test('division - edge case', () => {
    expect(() => division(10, 0)).toThrow();
  });

  test('multiply - normal cases', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 10)).toBe(0);
  });

  test('multiply - edge case', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });

  test('multi50 - normal cases', () => {
    expect(multi50(1, 2)).toBe(100);
    expect(multi50(-1, 5)).toBe(-250);
    expect(multi50(0, 10)).toBe(0);
  });

  test('multi75 - normal cases', () => {
    expect(multi75(2, 3)).toBe(450);
    expect(multi75(-2, 3)).toBe(-450);
    expect(multi75(0, 10)).toBe(0);
  });

  test('multi100 - normal cases', () => {
    expect(multi100(2, 3)).toBe(600);
    expect(multi100(-2, 3)).toBe(-600);
    expect(multi100(0, 10)).toBe(0);
  });

  test('multi200 - normal cases', () => {
    expect(multi200(2, 3)).toBe(1200);
    expect(multi200(-2, 3)).toBe(-1200);
    expect(multi200(0, 10)).toBe(0);
  });

  test('multi300 - normal cases', () => {
    expect(multi300(2, 3)).toBe(1800);
    expect(multi300(-2, 3)).toBe(-1800);
    expect(multi300(0, 10)).toBe(0);
  });

  test('multi{50, 75, 100, 200, 300} - edge case', () => {
    expect(multi50(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER * 50);
    expect(multi75(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER * 75);
    expect(multi100(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER * 100);
    expect(multi200(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER * 200);
    expect(multi300(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER * 300);
  });
});