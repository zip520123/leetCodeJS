/*Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// If we want to insert an element which is a dup, we can only insert it after the newly inserted elements from last step.
//time(2 ^ N)
//space(2 ^ N)
var subsetsWithDup = function(nums) {
  nums.sort((a,b)=>a-b)
  let res = [[]]
  let size =0; index =0
  for(let j=0;j<nums.length;j++){
    let n = nums[j]
    index = n != nums[j-1] ? 0 : size
    size = res.length
    for(let i=index;i<size;i++){
      let list = res[i].slice()
      list.push(n)
      res.push(list)
    }
  }
    
  return res
};
