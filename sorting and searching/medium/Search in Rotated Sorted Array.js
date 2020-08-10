/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //https://leetcode.wang/leetCode-33-Search-in-Rotated-Sorted-Array.html

//when we cut half the arr there are only one half is sorted

// var search = function(nums, target) {
//   let left = 0,right = nums.length - 1
//   while(left != right){
//     let mid = (left + right) / 2 | 0
//     if(nums[mid] > nums[right]){ // eg. 3,4,5,6,1,2
//       if (target > nums[mid] || target <= nums[right]){
//         left = mid + 1
//       } else {
//         right = mid
//       }
//     }else{ // eg. 5,6,1,2,3,4
//       if(target > nums[mid] && target <= nums[right]){
//         left = mid + 1
//       }else{
//         right = mid
//       }
//     }
//   }
//   if(target != nums[left])return -1
//   return left
// };

var search = function(nums, target) {
  if (nums.length == 0) return -1
  let left = 0
  let right = nums.length - 1
  let start = 0
  while(left < right) {
      let mid = left + ((right - left)>>1)
      if(nums[mid]< nums[mid -1]) {
        start = mid
      }
      if(nums[mid+1] < nums[mid]) {
        start = mid + 1
      }
      if(nums[mid] > nums[left]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
  }
  
  left = 0
  right = nums.length - 1
  if (target == nums[start]) return start
  if (start != 0){
    if (target >= nums[left]) {
      right = start
    } else {
      left = start
    }
  }
  
  
  while(left < right) {
      let mid = left + ((right - left)>>1)
      if (nums[mid] == target) {
          return mid
      }
      if (nums[mid] > target) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  if(nums[left] == target) return left
  return -1
};

let input = [4,5,6,7,0,1,2]
let input2 = 2

// let input = [1,3]
// let input2 = 3 
console.log(search(input,input2));