/*Longest Subarray of 1's After Deleting One Element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
Example 4:

Input: nums = [1,1,0,0,1,1,1,0,1]
Output: 4
Example 5:

Input: nums = [0,0,0]
Output: 0
 

Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


var longestSubarray = function(nums) {
    let res = 0
    let i = 0 
    let j = 0
    let k = 1
    for (;j<nums.length;j++) {
        if(nums[j] == 0) {
            k--
        }
        while( k < 0) {
            if (nums[i] == 0) {
                k++
            }
            i++
        }
        res = Math.max(res, j - i)
    }
  
    return res
};

// let input = [0,1,1,1,0,1,1,0,1]
let input = [1,1,0,1,1,0,0,1]

console.log(longestSubarray(input));