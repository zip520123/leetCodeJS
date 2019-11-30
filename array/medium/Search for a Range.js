/*Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//time O(N)
//space O(1)
var searchRange = function(nums, target) {
  left = -1
  right = -1
  for(i=0;i<nums.length;i++){
    if (nums[i] == target && left == -1)
      left = i
    if (nums[i] == target)
      right = i    
  }
  return [left,right]
};
//time O(log N)
//space O(1)

const upperBound = (nums,target) => {
  left =0, right = nums.length
  while(left != right){
    mid = (left + right) / 2 | 0
    if (nums[mid] <= target)
      left = mid + 1
    else
      right = mid
  }
  return nums[left - 1] == target ? left - 1 : -1
}

const lowerBound = (nums,target) =>{
  left =0, right = nums.length
  while(left != right){
    mid = (left + right) / 2 | 0
    if (nums[mid] < target)
      left = mid + 1
    else
      right = mid
  }
  return nums[left] == target ? left : -1
}

var searchRange = function(nums, target) {
  return [lowerBound(nums,target),upperBound(nums,target)]
}

