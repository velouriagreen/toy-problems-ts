import { isPowerOfFour } from './PowerOfFour';

describe('isPowerOfFour', () => {
  test('should return true for numbers that are powers of 4', () => {
    expect(isPowerOfFour(1)).toBe(true);
    expect(isPowerOfFour(4)).toBe(true);
    expect(isPowerOfFour(16)).toBe(true);
    expect(isPowerOfFour(64)).toBe(true);
  });

  test('should return false if number is not a power of 4', () => {
    expect(isPowerOfFour(0)).toBe(false);
    expect(isPowerOfFour(2)).toBe(false);
    expect(isPowerOfFour(5)).toBe(false);
    expect(isPowerOfFour(8)).toBe(false);
  });

  test('should return false for negative numbers', () => {
    expect(isPowerOfFour(-4)).toBe(false);
    expect(isPowerOfFour(-16)).toBe(false);
  })
});