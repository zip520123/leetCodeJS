/*Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?*/
/**
 * @param {number[]} nums
 * @return {number}
 */
//sorting time O(nlogn) space O(n)
var missingNumber = function(nums) {
  nums.sort((a,b)=>a-b)
  for(let i=0;i<=nums.length;i++){
      if(nums[i] != i) return i
  }
  return -1
};

//bit time O(n) space O(1)
var missingNumber = function(nums) {
  let res = 0
  for(let i=0;i<=nums.length;i++){
    res ^= i
    res ^= nums[i]
  }
  return res
};

//hashMap time O(n) space O(n)
var missingNumber = function(nums) {
  let set = new Set(nums)
  for(let i=0;i<=nums.length;i++){
      if (set.has(i) == false) return i
  }
  return -1
};

//Gauss' Formula (1+n)*n / 2 time O(N) space O(1)

var missingNumber = function(nums) {
  let sum = ((nums.length + 1) * nums.length) >> 1
  let currSum = 0
  for(let n of nums){
      currSum+=n
  }
  return sum - currSum
};