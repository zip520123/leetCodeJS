/*Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note: 
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length < 1) return []
  //res = [nums[0]]
  let res = [nums[0]]
  //window = [nums[0]]
  let window = [nums[0]]
  //for i=1 i < nums.len i++
  for(i=1;i<nums.length;i++){
      // window push nums[i]
      let n = nums[i]
      window.push(n)
      // i < k 
      if (i < k){
        //res[0] = max(res[0],n)
          res[0] = Math.max(res[0],n) }    
      else {
          // if i >= k
          // window shift()
          window.shift()
          // max = window.max
          let max = Math.max(...window)
      // res push max    
          res.push(max)
      }
  }
  // return res
  return res
};