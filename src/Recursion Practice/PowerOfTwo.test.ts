import { isPowerOfTwo } from './PowerOfTwo'

describe('isPowerOfTwo', () => {
  it('should return false if number is not a power of two', () => {
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(5)).toBe(false);
  });

  it('should return true if number is a power of 2', () => {
    expect(isPowerOfTwo(8)).toBe(true);
  });

  it('should return false for negative numbers', () => {
    expect(isPowerOfTwo(-8)).toBe(false);
  });
});