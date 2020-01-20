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

var search = function(nums, target) {
  let left = 0,right = nums.length - 1
  while(left != right){
    let mid = (left + right) / 2 | 0
    if(nums[mid] > nums[right]){ // eg. 3,4,5,6,1,2
      if (target > nums[mid] || target <= nums[right]){
        left = mid + 1
      } else {
        right = mid
      }
    }else{ // eg. 5,6,1,2,3,4
      if(target > nums[mid] && target <= nums[right]){
        left = mid + 1
      }else{
        right = mid
      }
    }
  }
  if(target != nums[left])return -1
  return left
};

// public int search(int[] nums, int target) {
//   int start = 0;
//   int end = nums.length - 1;
//   while (start <= end) {
//       int mid = (start + end) / 2;
//       if (target == nums[mid]) {
//           return mid;
//       }
//       //左半段是有序的
//       if (nums[start] <= nums[mid]) {
//           //target 在这段里
//           if (target >= nums[start] && target < nums[mid]) {
//               end = mid - 1;
//           } else {
//               start = mid + 1;
//           }
//       //右半段是有序的
//       } else {
//           if (target > nums[mid] && target <= nums[end]) {
//               start = mid + 1;
//           } else {
//               end = mid - 1;
//           }
//       }

//   }
//   return -1;
// }
