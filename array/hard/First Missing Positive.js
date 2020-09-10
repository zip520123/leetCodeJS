/*First Missing Positive
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Follow up:

Your algorithm should run in O(n) time and uses constant extra space.*/
/**
 * @param {number[]} nums
 * @return {number}
 */

//time O(nlogn) space O(n)
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
    let set = new Set(nums)
    let arr = []
    for(let n of set) {
        if (n>0)arr.push(n)
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>i + 1)return i + 1
    }
    
    return arr.length+1
};

//set time O(N) space O(N)
var firstMissingPositive = function(nums) {
    let set = new Set(nums)
    let i=1
    while(i<=nums.length) {
        if(set.has(i)==false) return i
        i++
    }
    return i
};

//tricky time O(N) space O(1)
var firstMissingPositive = function(nums) {
    let findOne = false
    
    for(let i=0;i<nums.length;i++) {
        if(nums[i] == 1) findOne = true
        if(nums[i] <=0 || nums[i] >nums.length) {
            nums[i] = 1
        }
    }
    console.log(nums);
    if (findOne == false) return 1
    
    for(let i=0;i<nums.length;i++) {
        let index = Math.abs(nums[i]) - 1
        if (nums[index] >0)nums[index] = -1 * nums[index]
          
    }
    console.log(nums);
    for(let i=0;i<nums.length;i++) {
        if (nums[i] > 0) return i + 1
    }
    
    return nums.length + 1 
};
// let input = [1,2,0]
let input = [3,4,-1,1]
console.log(firstMissingPositive(input));