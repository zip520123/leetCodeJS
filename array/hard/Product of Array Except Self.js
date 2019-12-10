/*Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//brute force
var productExceptSelf = function(nums) {
  res = []
  
  for(i=0;i<nums.length;i++){
      rsum = 1
      for(j=0;j<nums.length;j++){
          if (j != i)rsum *=nums[j]
      }
      res.push(rsum)
  }
  
  return res
};

//dp
//time O(N)
//space O(3N)
var productExceptSelf = function(nums) {
  l = [1]
  r = []
  r[nums.length - 1] = 1
  res = []
  for(i=1;i<nums.length;i++){
    l[i] = l[i-1] * nums[i - 1]
  }
  for(i=nums.length - 2;i>=0;i--){
    r[i] = r[i + 1] * nums[i + 1]
  }
  for(i=0;i<nums.length;i++){
    res[i] = l[i] * r[i]
  }
  return res
}

//time O(N)
//space O(N)

var productExceptSelf = function (nums) {
  res = [1]
  for(i=1;i<nums.length;i++){
    res[i] = res[i-1] * nums[i-1]
  }
  r = 1
  for(i=nums.length - 1;i>=0;i--){
    res[i] = res[i] * r
    r *= nums[i]
  }
  return res
}