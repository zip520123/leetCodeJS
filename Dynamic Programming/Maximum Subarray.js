/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n^2)
var maxSubArray = function(nums) {
    //add all and store max array
  var maxValue = -Infinity
  
  for (i = 0; i < nums.length; i+=1){
    for(j=i; j< nums.length; j+=1){
      var currValue = nums.slice(i,j+1).reduce((a,b)=>{return a + b},0)
      if (currValue > maxValue){
        maxValue = currValue
      }
    }
  }
  return maxValue
};

//time O(n)

var maxSubArray = function(nums){
//localMax = max(nums[i],localMax + nums[i])
//globalMax = localMax > globalMax ? localMax : globalMax
  var localMax = -Infinity
  var globalMax = -Infinity
  nums.forEach(n=>{
    localMax = Math.max(n,localMax + n)
    globalMax = localMax > globalMax ? localMax : globalMax
  })
  return globalMax
}