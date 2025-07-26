/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

 */

/**
 * Plan:
 *  1. Loop over nums array and create a hash. This hash will take the number as the key, and the index as the value
 *     This hash will have the values of duplicate numbers within the hash overriden
 *  2. Create a fxn. that will calculate the difference between the target and an index. 
 *  3. Loop over nums array again and check to see if the difference of current index exists as a key within the hash
 *  4. If there is a match, return those two value in an array
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
const getTwoSum = (nums: Array<number>, target: number): number[] => {
    const numberToIndex: {[key: number]: number} = {};
    
    for(let i = 0; i < nums.length; i++) {
       numberToIndex[nums[i]] = i;
    };
    console.log('numberToIndex', numberToIndex);
    let getDifference = (idx: number) => target - idx; 

    for(let i = 0; i < nums.length; i++) {
        let difference = getDifference(nums[i]);
        console.log('difference', difference);
        if(numberToIndex[difference] !== undefined && numberToIndex[difference] !== i) {
            return [i, numberToIndex[difference]];
        }
    }
    return[];
};

console.log(getTwoSum([2,7,11,15], 9)); // => [0,1]
console.log(getTwoSum([3,2,4], 6)); // => [1,2]
console.log(getTwoSum([3,3], 6)); // => [0,1]

