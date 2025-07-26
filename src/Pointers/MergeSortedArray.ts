/**
 88. Merge Sorted Array
 
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the 
 number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate 
this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements 
are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

Output: [1,2,2,3,5,6]

Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0

Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

The number of nodes in the list is in the range [0, 10 to the fourth power]
1 <= Node.val <= 50
0 <= val <= 50
 */

/**
    Plan:
    1. Since nums1 has enough space for additional elements in nums2, set up pointers 
       First pointer (first) will be m - 1, which points at the first number in the array that isn't a 0. 
       Second pointer (second) will be set to the end of the array, n - 1; 
       Third pointer, i,  will be set at the end of the first array;
    2. Create conditional that verifies whether 'first' values being pointed at are greater than or equal to the 
      'second' pointer value. 
       If so, Update ith value while also decrementing it. Decrement second pointer
       Else 
 *     If first is less than second, decrement first and i

    3. Once second is out of range, the function should stop

    [1, 2, 3, 0, 0, 0]   [2, 5, 6]   Comparing f and s. First is greater than second, so assign ith's value to second's value
              f     i           s    Decrement i and second
    
    [1, 2, 3, 0, 0, 6]   [2, 5, 6]   First is not greater than second. Assign ith's value to second's value
           f     i           s       Decrement i and second

    [1, 2, 3, 0, 5, 6]   [2, 5, 6]    First is finally greater than second's value. Assign i to first's value
           f  i           s           Decrement i and first  

    [1, 2, 3, 3, 5, 6]   [2, 5, 6]   First is not greater than second. Decrement i and second
        f  i              s    

    [1, 2, 2, 3, 5, 6]   [2, 5, 6]    Swap array1[i] and array2[i]
        i               s 
        f      
 */

const mergeSortedArray = (array1: number[], m: number,  array2: number[], n: number): number[] => {
  if(array1.length === 0) return array2;
  if(array2.length === 0) return array1;

  let first = m - 1;
  let second = n - 1;
  let i = (m + n) - 1;

  while(second >= 0) {
    let firstVal = array1[first];
    let secondVal = array2[second];
    
    if(firstVal > secondVal) {
        array1[i] = firstVal;
        i--;
        first--;
    } else {
        array1[i] = secondVal;
        i--; 
        second--;
    }
  }
  return array1;
};

console.log(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3)); // => [1, 2, 2, 3, 5, 6]
console.log(mergeSortedArray([0], 0, [2, 5, 6], 3)); // => [2, 5, 6]
console.log(mergeSortedArray([1], 1, [], 0)); // => [1]

