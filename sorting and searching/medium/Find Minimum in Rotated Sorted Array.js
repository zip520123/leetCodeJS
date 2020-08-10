/*Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    if (nums[0] < nums[nums.length -1]) return nums[0]
    if(nums.length == 1) return nums[0]
    let left = 0
    let right = nums.length -1
    while(left < right) {
        let mid = left + ((right - left) >> 1)
        
        if (nums[mid] < nums[mid -1]) {
            return nums[mid]
        }
        if (nums[mid +1] < nums[mid]){
            return nums[mid + 1]
        }
        if (nums[mid] > nums[left]){
            left = mid + 1
        } else {
            right = mid
        }
    }
    return -1
};