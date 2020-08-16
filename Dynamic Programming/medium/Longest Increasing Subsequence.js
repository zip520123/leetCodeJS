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
  if (nums.length == 0) return 0
  let max = 1
  let j = 1
  let dp = new Array(nums.length)
  dp.fill(1)
  while( j < nums.length ) {
      for(let i=0;i<j;i++){
          if (nums[j] > nums[i]) {
              dp[j] = Math.max(dp[j] , dp[i] + 1) 
              max = Math.max(max, dp[j])
          }
      }
      j++
  }
  return max
};

//binary search

/*In this approach, we scan the array from left to right. We also make use of a dpdp array initialized with all 0's. This dpdp array is meant to store the increasing subsequence formed by including the currently encountered element. While traversing the numsnums array, we keep on filling the dpdp array with the elements encountered so far. For the element corresponding to the j^{th}j 
th
  index (nums[j]nums[j]), we determine its correct position in the dpdp array(say i^{th}i 
th
  index) by making use of Binary Search(which can be used since the dpdp array is storing increasing subsequence) and also insert it at the correct position. An important point to be noted is that for Binary Search, we consider only that portion of the dpdp array in which we have made the updates by inserting some elements at their correct positions(which remains always sorted). Thus, only the elements upto the i^{th}i 
th
  index in the dpdp array can determine the position of the current element in it. Since, the element enters its correct position(ii) in an ascending order in the dpdp array, the subsequence formed so far in it is surely an increasing subsequence. Whenever this position index ii becomes equal to the length of the LIS formed so far(lenlen), it means, we need to update the lenlen as len = len + 1len=len+1.

Note: dpdp array does not result in longest increasing subsequence, but length of dpdp array will give you length of LIS.

Consider the example:

input: [0, 8, 4, 12, 2]

dp: [0]

dp: [0, 8]

dp: [0, 4]

dp: [0, 4, 12]

dp: [0 , 2, 12] which is not the longest increasing subsequence, but length of dpdp array results in length of Longest Increasing Subsequence.*/

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
