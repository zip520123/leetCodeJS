/*Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //time O(n!) space O(n)
var permute = function(nums) {
  let res = []
  for (let n of nums) {
      let temp = res.splice(0,res.length)
      if(temp.length==0) {
          res.push([n])
      } else {
          for(let i=0;i<temp.length;i++){
              let list = temp[i]
              for(let j=0;j<=list.length;j++){
                  let token = list.slice()
                  token.splice(j,0,n)
                  res.push(token)
              }
          } 
      }
  }
  return res
};

var permute = function(nums) {
  let res = []
  let dfs = acc => {
      if(nums.length==0){
          res.push(acc.slice())
          return
      }
      for(let i=0;i<nums.length;i++){
          let n = nums.splice(i,1)[0]
          acc.push(n)
          dfs(acc)
          acc.pop()
          nums.splice(i,0,n)
      }
  }
  dfs([])
  return res
};