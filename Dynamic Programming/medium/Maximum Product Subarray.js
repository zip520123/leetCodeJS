/*Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
//brute force time O(n ^ 2)
var maxProduct = function(nums) {
  let max = -Infinit
  for(let i=0;i<nums.length;i++){
      let sum =1
      for(let j=i;j<nums.length;j++){
          sum*=nums[j]
          max = Math.max(max,sum)
      }
  }
  return max
};

//time O(n)

var maxProduct = function(nums){
  var minArr = [nums[0]]
  var maxArr = [nums[0]]
  var res = nums[0]
  for (i = 1; i < nums.length; i += 1){
    if (nums[i]>0) {
      minArr.push(Math.min(minArr[i - 1] * nums[i], nums[i]))
      maxArr.push(Math.max(maxArr[i - 1] * nums[i], nums[i]))
    } else {
      minArr.push(Math.min(maxArr[i - 1] * nums[i], nums[i]))
      maxArr.push(Math.max(minArr[i - 1] * nums[i], nums[i]))
    }
    res = Math.max(maxArr[i], res)
  }
  return res 
}

var maxProduct = function(nums) {
  if(nums.length==0) return 0
  let minArr = [nums[0]]
  let maxArr = [nums[0]]
  let res = nums[0]
  for(let i=1;i<nums.length;i++){
      if(nums[i]>0){
          minArr.push(Math.min(minArr[i-1]*nums[i],nums[i]))
          maxArr.push(Math.max(maxArr[i-1]*nums[i],nums[i]))
      } else {
          minArr.push(Math.min(maxArr[i-1]*nums[i],nums[i]))
          maxArr.push(Math.max(minArr[i-1]*nums[i],nums[i]))
      }
      res = Math.max(res,maxArr[maxArr.length-1])
  }
  return res
};
let input = [2,3,-2,4]
console.log(maxProduct(input));
