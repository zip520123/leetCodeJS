/*Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let dict = {}
  nums.forEach(n=>{
      dict[n] = dict[n] == null ? 1 : ++dict[n]
  })
  let arr = []
  Object.keys(dict).forEach(key=>{
      console.log(key,dict[key])
      arr.push(key)
  })
  arr.sort((a,b)=>{    
      return dict[b] - dict[a]
  })
  return arr.slice(0,k)
};