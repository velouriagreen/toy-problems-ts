import { calculateFibonacci} from "./FibonacciNumber";

describe('calculateFibonacci', () => {
  test('should return 0 if number is 0', () => {
    expect(calculateFibonacci(0)).toBe(0);
  });

  test('should return 1 if number reaches 1', () => {
    expect(calculateFibonacci(1)).toBe(1);
  });

  test('should return a recursive call of the sum of the input number first subtracted by 2 and a recursive call of the input number subtracted by 1', () => {
    let num: number = 4;
    expect(calculateFibonacci(num - 1) + calculateFibonacci(num - 2)).toBe(3);
  })
});