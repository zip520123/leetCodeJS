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
var permute = function(nums) {
  let res = [[]]
  for(let i=0;i<nums.length;i++){
      let n = nums[i]
      let temp = res.splice(0,res.length)
      for(let j=0;j<temp.length;j++){
          let token = temp[j]
          for(let k=0;k<=token.length;k++){
            if (token.length ==0){
                res.push([n])
            } else{
                let char = token.slice()
                char.splice(k,0,n)
                res.push(char)
            } 
          }
      }
  }
  return res
};

var permute = function(nums) {
  let res = [[]]
  nums.forEach(n=>{
    res.splice(0,res.length).forEach(temp=>{
      for(let i=0;i<=temp.length;i++){
        if(temp.length == 0){
          res.push([n])
        }else{
          let char = temp.slice()
          char.splice(i,0,n)
          res.push(char)
        }
      }
    })
  })
  return res
}