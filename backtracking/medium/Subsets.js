/*Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//time O(2 ^ N)
//Permutations: N!
//combinations: Ckn = N!/ (N-k)!k!
//subset: 2^N


var subsets = function(nums) {
  let res = [[]]
  nums.forEach(n=>{
    res.slice().forEach(token=>{
      let temp = token.slice()
      temp.push(n)
      res.push(temp)
    })
  })
  return res
};