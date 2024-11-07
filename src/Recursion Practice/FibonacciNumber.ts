/**
 * 509. Fibonacci Number
 * 
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
 such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

 */

/** 
    PLAN
    1. Base Case: function should stop calling itself when num is less than 2;
    2. Recursive case: continue calling itself by using the same formula (num)
    3. Edge Case: Should consider placements of numbers 0 and 1 in fib sequence

    Fib(4) = 3

    1 1 2 3
          _

    Left Sides subtracts 1. Right sides subtracts 2
            4
       (-1)    (-2)
       3         2
  (-1)  (-2)  (-1) (-2)
   2     1    1     0
   
 1        0

 At the base case, it's gonna return all the 1's added up in the callstack
 */

export const calculateFibonacci = (num: number) : number => {
  if(num === 0) return 0;
  if(num === 1) return 1;

  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
 };

//  console.log(calculateFibonacci(2)); // => 1
//  console.log(calculateFibonacci(3)); // => 2
//  console.log(calculateFibonacci(4)); // => 3