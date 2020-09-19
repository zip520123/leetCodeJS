/*Combination Sum
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
Each element of candidate is unique.
1 <= target <= 500
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//time O(n!) space O(n)
var combinationSum = function(candidates, target) {
    let res = []
    
    let dfs = (currList, subCondidates, curr) => {
        if(curr == 0) {
            res.push(currList.slice())
            return
        }
        if(curr<0) return
        for(let i=0;i<subCondidates.length;i++){
            let subCon = subCondidates.slice(i)
            let n = subCondidates[i]
            currList.push(n)
            dfs(currList, subCon, curr-n)
            currList.pop()
        }
    }
    dfs([],candidates,target)
    return res
};

var combinationSum = function(candidates, target) {
    let res = []
    candidates.sort((a,b)=>a-b)
    let dfs = (currList,curr, index) => {
        if(curr==0) {
            res.push(currList.slice())
            return
        }
        if(curr<0)return
        for(let i=index;i<candidates.length;i++) {
            let n = candidates[i]
            if(n>curr)break
            
            currList.push(n)
            dfs(currList, curr-n, i)
            currList.pop()
        }
    }
    dfs([],target,0)
    return res
};

//reverse output time O(N!)
var combinationSum = function(candidates, target) {
    let res = []
    candidates.sort((a,b)=>a-b)
    let dfs = (currList, subCondidates, curr, deep, c) => {
        if(deep == c) {
            if(curr == 0) {
                res.push(currList.slice())
            }
            return
        }
        
        if(curr<0) return
        for(let i=0;i<subCondidates.length;i++){
            let subCon = subCondidates.slice(i)
            let n = subCondidates[i]
            if(n>curr)break
            currList.push(n)
            dfs(currList, subCon, curr-n, deep, c+1)
            currList.pop()
        }
    }
    
    for(let deep=1;deep<=target/candidates[0];deep++){
        dfs([],candidates,target, deep, 0)    
    }
    
    return res
};

let input = [2,3,6,7]
let input2 = 7
console.log(combinationSum(input,input2));