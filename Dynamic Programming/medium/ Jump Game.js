/*Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
jump length is 0, which makes it impossible to reach the last index.*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//time O(n ^ 2)
//space O(n)
var canJump = function(nums) {
  if (nums.length == 0) return false
  arr = nums.map(_=>false)
  arr[0] = true
  for(i=0;i<nums.length;i++){
    if (arr[i])
      for(j=0;j<=nums[i];j++){
        arr[i+j] = true
      }
  }
  return arr[arr.length - 1]
};

//time O(n)
//space O(1)
var canJump = function(nums) {
  if (nums.length == 0) return false
  pos = nums.length - 1
  for(i=nums.length - 1;i>=0;i--)
    if (i + nums[i] >= pos)
     pos = i
  return pos == 0
};
