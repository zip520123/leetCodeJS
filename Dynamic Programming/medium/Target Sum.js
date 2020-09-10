/*Target Sum
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:

Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
 

Constraints:

The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.*/
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

//brute force time O(2^n) space O(n)
var findTargetSumWays = function(nums, S) {
    let res = 0
    
    let dfs = (sum, i) => {
        if(i>nums.length) return
        if(i==nums.length && sum== S) res++
        let curr1 = sum + nums[i]
        let curr2 = sum - nums[i]
        dfs(curr1,i+1)
        dfs(curr2,i+1)
    }
    
    dfs(0,0)
    
    return res
};

//dp time O(l*n) space O(l*n)
var findTargetSumWays = function(nums, S) {

    let dp = new Map()
    let dfs = (sum, i) => {
        
        if(i==nums.length) {
            return sum==S? 1:0
        } else {
            if(dp.has(i+":"+sum)) return dp.get(i+":"+sum)
            let curr1 = dfs(sum+nums[i],i+1)    
            let curr2 = dfs(sum-nums[i],i+1)
            
            dp.set(i+":"+sum, curr1 + curr2) 
            return curr1 + curr2 
        }
    }
    return dfs(0,0)
};

let input = [1,1,1,1,1]
let input2 = 3

console.log(findTargetSumWays(input,input2));