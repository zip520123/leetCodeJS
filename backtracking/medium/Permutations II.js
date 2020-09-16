/*Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    let dfs = (curr) => {
        if(nums.length==0) {
            res.push(curr.slice())
            return
        }
        let prev 
        for(let i=0;i<nums.length;i++){
            if(prev == nums[i]) continue
            prev = nums[i]
            let n = nums.splice(i,1)[0]
            curr.push(n)
            dfs(curr)
            curr.pop()
            nums.splice(i,0,n)
        }
        
    }
    
    dfs([])
    
    return res
};

let input = [1,1,2,2]
console.log(permuteUnique(input));