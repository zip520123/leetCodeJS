/*Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//time O(n^2)
//space O(n)
var sortColors = function(nums) {
    for(i=0;i<nums.length;i++){
      for(j=i+1;j<nums.length;j++){
        if (nums[i]>nums[j]){
          let temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
        }
      }
    }
};
//time O(n)
//space O(n)
var sortColors = function(nums) {
  let dict = {}
  nums.forEach(n=>{
      if (dict[n]==null){
          dict[n] = [n]    
      }else{
          dict[n].push(n)
      }
  })
  nums.splice(0,nums.length) 
  let t = []
  Object.keys(dict).forEach(key=>{
      if (dict[key].length >= 1) t.push(...dict[key])
  })
  nums.push(...t)
};