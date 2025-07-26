/**
 * 26. Remove Duplicates from a Sorted Array
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each 
 * unique element appears only once. The relative order of the elements should be kept the same. Then return 
 * the number of unique elements in nums.
 * 
    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.


    Example 1:
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Example 2:
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

 * 
 */

import { swap } from "../Helpers/helpers";

/**
 * Plan: 
 *  1. Edge cases: What do we do if all numbers in array are the same?
 *  2. Create/Use a swap function that will swap elements in an array based on index
 *  3. Create prev variable and assign it to 0
 *  4. Loop over nums array beginning at first index. 
 *     Create boolean that verifies whether prev is not equal to current nums[i]
 *          if not swap(nums, prev, i);
 *          if so, prev++;
 * 
 *      
 *     [1, 1, 2]      first iteration: p and i are the same value. prev++; i moves forward
 *      p  i
 * 
 *      [1, 1, 2]     
 *          p  i
 * 
 *      [1, 1, 2]    Second iteration: p and i are not the same value. Swap
 *          p  i
 * 
 *       [1, 2, 1]   Loop is finished. return prev
 *              p   i
 *      
 */

const removeDuplicatesFromArray = (nums: number[]): number => {
    let prev = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[prev] !== nums[i]) {
            prev++;
            swap(nums, prev, i);
        } 
    }
    return prev+1; 
};

console.log(removeDuplicatesFromArray([1,1,2])); // => 2
console.log(removeDuplicatesFromArray([0,0,1,1,1,2,2,3,3,4])); // => 5