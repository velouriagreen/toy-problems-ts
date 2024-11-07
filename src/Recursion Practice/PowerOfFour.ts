/**
 * 342 Power of Four
 Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

 

Example 1:

Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true
 */

/**
  Plan: 
  Base Case: Return true if n reaches 1
  Recursive Case: Return n / 4

  Conditional: Return false if n is not divisible by 4 or if n is less than or equal to 0
 */

export const isPowerOfFour = (n: number): boolean => {
  if (n === 1) return true;

  if(n % 4 !== 0 || n <= 0) return false;

  return isPowerOfFour(n / 4);
};
 
//console.log(isPowerOfFour(16)); // => true
//console.log(isPowerOfFour(5)); // => false
//console.log(isPowerOfFour(1)); // => true

console.log(isPowerOfFour(8)); // => false