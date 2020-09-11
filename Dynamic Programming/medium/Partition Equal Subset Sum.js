/* Partition Equal Subset Sum
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//brute force time O(2^n) space O(N)
var canPartition = function(nums) {
    let sum = 0
    for(let n of nums) {
        sum+=n
    }
    if(sum%2==1) return false

    let dfs = (i,curr) => {
        if(curr*2 == sum) return true
        if(curr > (sum >> 1) || i >=nums.length) return false
        return dfs(i+1,curr) || dfs(i+1,curr + nums[i])
    }
    return dfs(0,0,sum)
};

//with map 
/*You can get the runtime in the 60s and score 90%+ higher than most solutions with a tiny change.

Basically by moving the '+ nums[index]' to the first recursive call so that instead of: 
  canPartition(nums, index + 1, sum, total) || canPartition(nums, index + 1, sum + nums[index], total)
You have:
  canPartition(nums, index + 1, sum  + nums[index], total) || canPartition(nums, index + 1, sum, total)


If you think about how the function (as it is) gets called, you're basically traveling all the way to the end of the array with a sum of 0 and pushing every recursive call until you get there onto the stack. Once your index exceeds the length of the array it will start popping off those calls, but if you think about the call that gets made with the second to last element of the array, you're basically making an additional call in that function with a sum that only has the second to last number, and so on and so forth as you move backwards. Essentially this way of structuring it only works if you have the highest numbers at the end or if you sort the array (which slows your runtime).


By moving the '+ nums[index]' to the first call you ensure that as you start putting recursive calls on the stack you always enter the first function which means you're building up the sum as you go along until you hit your base, when you've exceeded half the total. So at that point you've already gotten close to the target sum, and then you start backtracking from a number that is closer to the midpoint instead of having to travel all the way down with a sum of 0 and making an additional function call each time as you work your way back. */
//time O(m * n) m is sum, n is the number of nums elements.
//space O(N) recursive stack
var canPartition = function(nums) {
    let sum = 0
    for(let n of nums) {
        sum+=n
    }
    if(sum%2==1) return false
    let map = new Map()
    let dfs = (i,curr) => {
        let key = i+":"+curr
        if(map.has(key)) return map.get(key)
        if(curr*2 == sum) return true
        if(curr > (sum >> 1) || i >=nums.length) return false
        let res = dfs(i+1,curr + nums[i]) || dfs(i+1,curr) 
        map.set(key, res)
        return res
    }
    return dfs(0,0)
};

let input = [1,5,11,5]
console.log(canPartition(input));