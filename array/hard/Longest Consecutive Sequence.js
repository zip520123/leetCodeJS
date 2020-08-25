/*Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
//sort time O(nlogn) space O(1) or O(n) 
var longestConsecutive = function(nums) {
    if(nums.length == 0)return 0
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let long = 1
    let curr = 1
    for(let i=1;i<nums.length;i++){
        if(nums[i] == nums[i - 1]) continue
        if(nums[i] - 1 == nums[i - 1]){
            curr ++
            long = Math.max(long, curr)
        } else {
            curr = 1
        }
    }
    return long
};

//hashSet time O(N) space O(N)
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0
    let set = new Set(nums)
    
    let max = 0
    for (let el of set) {
        
        let localMax = 0
        let curr = el
        while(set.has(curr)) {
            curr ++
            localMax ++
        }
        max = Math.max(localMax,max)
    }
    return max
};

var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0
    let set = new Set(nums)
    let max = 0
    for (let el of set) {
        let localMax = 0
        let curr = el
        if (set.has(curr - 1) == false) { // we don't have to check the number in the middle of consecutive
            while(set.has(curr)) {
            curr ++
            localMax ++
            }
            max = Math.max(localMax,max)    
        }
        
    }
    return max
};

let input = [1,2,0,1]
console.log(longestConsecutive(input));