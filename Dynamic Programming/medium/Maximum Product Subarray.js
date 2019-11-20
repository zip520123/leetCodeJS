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
// time O(n ^ 2)
// var maxProduct = function(nums) {
//   var globalMax = -Infinity
//   for (i = 0; i< nums.length; i+=1){
//     for (j = i; j < nums.length; j+=1){
//       var currValue = nums.slice(i,j+1).reduce((p,c) => {return p * c},1)
//       globalMax = currValue > globalMax ? currValue : globalMax
//     }
//   }
//   return globalMax
// };

//time O(n)



var maxProduct = function(nums){
//minArr, maxArr, res = [nums[0]]
  var minArr = [nums[0]]
  var maxArr = [nums[0]]
  var res = nums[0]
//for i = 1 in nums
  for (i = 1; i < nums.length; i += 1){
    // if nums[i] > 0
    if (nums[i]>0) {
      //  minArr add min(minArr[i - 1] * nums[i], nums[i])
      minArr.push(Math.min (minArr[i - 1] * nums[i], nums[i]))
    //  maxArr add max(maxArr[i - 1] * nums[i], nums[i])
      maxArr.push(Math.max(maxArr[i - 1] * nums[i], nums[i]))
    } else {
      // else 
    //  minArr add min(maxArr[i - 1] * nums[i], nums[i])
      minArr.push(Math.min(maxArr[i - 1] * nums[i], nums[i]))
    //  maxArr add max(minArr[i - 1] * nums[i], nums[i])
      maxArr.push(Math.max(minArr[i - 1] * nums[i], nums[i]))
    }
    // res = max(maxArr[i], res)
    res = Math.max(maxArr[i], res)
  }

  return res 
}

