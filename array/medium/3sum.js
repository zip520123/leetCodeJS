/*3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  if (nums.length < 3)return []
  nums.sort((a, b) => (a - b))
  for(let i=0;i<nums.length - 2;i++){
      let a = nums[i]
      if(nums[i] == nums[i - 1]){
          continue
      }
      let left = i + 1
      let right = nums.length - 1
      while(left < right){
          let b = nums[left]
          let c = nums[right]
          let sum = a+b+c
          if(sum == 0){
              res.push([a,b,c])
              while(nums[left] == nums[left + 1]){
                  left++
              }
              while(nums[right] == nums[right-1]){
                  right--
              }
              left++
              right--
          }else if(sum > 0){
              right--
          }else{
              left++
          }
          
      }
  }
  return res
};
