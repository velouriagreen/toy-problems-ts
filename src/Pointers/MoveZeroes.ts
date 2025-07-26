/**
 * 283. Move Zeroes
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the 
    non-zero elements.

    Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

    Follow up: Could you minimize the total number of operations done?
 */


/**
 * Plan
 * 1. Create pointers, first and second, and assign them to numbers 0 and 1 (respective to their initial index positions).
 * 2. Loop over nums array. Within loop, create conditional that covers these cases:
 *    a. If first is a zero, swap first and second. Increment both first and second
 *    b. If second is zero, increment second
 * 3. Outside of the loop, return nums
 *  
 *     [0, 1, 0, 3, 12]         Value at first is 0. Swap values for first and second
 *      f  s                    Increment first and second
 *      
 *      [1, 0, 0, 3, 12]        Value at second is 0. Increment second by one
 *          f  s
 * 
 *      [1, 0, 0, 3, 12]        Value at first is 0. Swap with value at second. Increment second by one.
 *          f     s             Increment first by 1?
 * 
 *      [1, 3, 0, 0, 12]        Value at first is 0. Swap with value at second
 *             f      s          
 * 
 *      [1, 3, 12, 0, 0]        Second can no longer increment. Return newly sorted nums array outside of loopß
 *                 f  s
 */

import { swap } from "../Helpers/helpers";
const moveZeroesToBackOfArray = (nums: number[]): number[] => {
    if(nums.length <= 1) return nums;
    let first = 0;
    let second = 0;

    while(second < nums.length) {
      if(nums[second] !== 0) {
        swap(nums, first, second);
        first++;
      } 
      second++;
    };
    return nums;
};
console.log(moveZeroesToBackOfArray([0, 1, 0, 3, 12]));