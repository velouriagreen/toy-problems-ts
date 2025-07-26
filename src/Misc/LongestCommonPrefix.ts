/**

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 */

/** Brute Force Plan
 * 1. Cover edge cases: What to return if there is only one string in the array?
 *    -How many letters are required to be considered a prefix? Is one enough?
 * 2. Create variable prefix. Assign it to the first word in strings.
 *    Loop over strings array.
 * 
 *      prefix = flower
 *      strings = ["flower", "flow", "flight"]
 *  As we loop, we will compare what prefix and the following word in strings have in common:
 *     
 *     "flower"   "flow"
 *          
 *            "flow"
 *      
 *      "flow"    "flight"
 *            "fl"
 * 
 *  3. Create while loop that will run while prefix has a match in the current, iterated word
 *      strings[i].indexOf(prefix !== 0)
 *  5.  Re-assign prefix to what those strings have in common by extracting a portion of the string, 
 *      prefix = prefix.substring(0, prefix.length - 1);
 *      
 *      prefix = flower
 *      flowe    flow
 *      prefix = flowe
 *      flowe   flow
 *      prefix = flow
 * 
 *  6. Once the current iterated string has its prefix extracted, the loop will move on to 
 *     the following word
 *  7. Return prefix;
 *  
 */                

const getLongestCommonPrefix = (strings: Array<string>): string => {
    if(strings.length === 0) return '';
    let prefix = strings[0];
    for(let i = 1; i < strings.length; i++) {
        while(strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
};

console.log(getLongestCommonPrefix(["flower","flow","flight"])); // => 'fl'
console.log(getLongestCommonPrefix(["dog","racecar","car"])); // => '';