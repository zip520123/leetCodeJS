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
// var sortColors = function(nums) {
//     for(i=0;i<nums.length;i++){
//       for(j=i+1;j<nums.length;j++){
//         if (nums[i]>nums[j]){
//           let temp = nums[i]
//           nums[i] = nums[j]
//           nums[j] = temp
//         }
//       }
//     }
// };
// //time O(n)
// //space O(n)
// var sortColors = function(nums) {
//   let dict = {}
//   nums.forEach(n=>{
//       if (dict[n]==null){
//           dict[n] = [n]    
//       }else{
//           dict[n].push(n)
//       }
//   })
//   nums.splice(0,nums.length) 
//   let t = []
//   Object.keys(dict).forEach(key=>{
//       if (dict[key].length >= 1) t.push(...dict[key])
//   })
//   nums.push(...t)
// };

// //time O(n) space O(n)
// var sortColors = function(nums) {
//   let dict = {}
//   for(item of nums) {
//       dict[item] = dict[item] == null ? 1 : ++dict[item]
//   }
  
//   let res = []
//   for(let i=0;i<dict[0];i++){
//       res.push(0)
//   }
//   for(let i=0;i<dict[1];i++){
//       res.push(1)
//   }
//   for(let i=0;i<dict[2];i++){
//       res.push(2)
//   }
//   nums.splice(0,nums.length,...res)
  
// };
//time O(n) space O(1)
var sortColors = function(nums) {
  let start = 0
  let end = nums.length -1
  let index = 0
  while(index <= end) {
      if (nums[index] == 0) {
          nums[index] = nums[start] 
          nums[start] = 0
          start++
          index++
      } else if (nums[index] == 2) {
          nums[index] = nums[end]
          nums[end] = 2
          end--
      } else if (nums[index] == 1){
          index++
      }
      
  }
};
let input = [2,0,1]
sortColors(input)
console.log(input);