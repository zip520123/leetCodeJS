/*Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//time O(n^2)
//space O(n)
var lengthOfLIS = function(nums) {
  if (nums.length == 0) {
      return 0;
  }
  let dp = [1]
  let max = 1
  for(let i=1;i<nums.length;i++){
      let maxval = 0
      for(let j = 0;j<i;j++){
          if(nums[i]>nums[j]){
              maxval = Math.max(maxval,dp[j])
          }
      }
      dp[i] = maxval + 1
      max = Math.max(max,dp[i])
  }
  return max

};

//binary search
//time O(nlog n)
//space O(n)
var lengthOfLIS = function(nums) {
  let dp = []
  for(let i=0;i<nums.length;i++){
      dp.push(0)
  }
  let len = 0
  nums.forEach(n=>{
      let l = 0, r = len
      while(l!=r){
          let mid = (l+r)/2|0
          if(dp[mid] < n){
              l = mid + 1
          }else{
              r = mid
          }
      }
      dp[l] = n
      if (l == len)len++
  })
  return len
};
