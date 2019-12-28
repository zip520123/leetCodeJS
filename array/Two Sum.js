/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//time O(n^2)
//space O(1)
var twoSum = function(nums, target) {
  for(i = 0; i< nums.length; i+=1){
    for(j = i + 1; j < nums.length; j+=1){
      if (nums[i] + nums[j] == target) {
        return [i,j]
      }
    }
  }
  return []
};
//time O(n)
//space O(n)
var twoSum = function(nums, target) {
  let dict = {}
  for(i=0;i<nums.length;i++){
    let res = target - nums[i]
    if(dict[res] != null){
      return [dict[res],i]
    }
    dict[nums[i]] = i
  }
  return []
}