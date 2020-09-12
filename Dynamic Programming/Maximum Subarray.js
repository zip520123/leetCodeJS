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

var maxSubArray = function(nums) {
  if(nums.length==0) return 0
  let max = -Infinity
  for(let i=0;i<nums.length;i++){
      let sum = 0
      for(let j=i;j<nums.length;j++){
          sum+=nums[j]
          max = Math.max(sum, max)
      }
  }
  return max
};

//time O(n)

var maxSubArray = function(nums) {
  if(nums.length==0) return 0
  let localMax = -Infinity
  let globalMax = -Infinity
  
  for(let n of nums) {
      localMax = Math.max(n,localMax+n)
      globalMax = Math.max(localMax,globalMax)
  }
  return globalMax
};
let input = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(input));