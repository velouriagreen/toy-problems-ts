/**
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x. Two to the x power

 

Example 1:

Input: n = 1
Output: true
Explanation: 2 to the 0th power = 1

Example 2:
Input: n = 16
Output: true
Explanation: 2 to the 4th power = 16

Example 3:
Input: n = 3
Output: false

 */

/**
 * Plan: 
 * 1. Create base case : if n === 1 return true. Once we reach this point, we no longer need to keep going
 * 2. Create recursive case : n / 2. We continue dividing n by 2 to get it to meet our other conditions
 * 3. The real meat of the problem lies in this condition: if n or its quotient is not divisible by 2 
 *     or if it is a negative number, return false
 */

// Time Complexity: O(log(2n)) since we are dividing the input number by 2 each time, we are 
// Space Complexity: O(log(2n))
export const isPowerOfTwo = (n: number): boolean => {
    if(n === 1) {
      return true;
    }
    if(n % 2 !== 0 || n <= 0) {
      return false
    }
    return isPowerOfTwo(n / 2);
  };
  
  //console.log(isPowerOfTwo(1)) // => true
  //console.log(isPowerOfTwo(16)) // => true
  //console.log(isPowerOfTwo(3)) // => false
  

// With while loop
// const isPowerOfTwo = (num) => {
//   let i = 1;

//   while(i < num) { 
//     i *= 2; // Multiply i by 2 until the loop finishes running
//     console.log(i);
//   };
//   return i === num; // Returns a boolean
// };