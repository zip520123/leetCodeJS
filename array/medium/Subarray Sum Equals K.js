/*Subarray Sum Equals K
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
 

Constraints:

The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//brute force time O(n^3) space O(1)
var subarraySum = function(nums, k) {
    let res = 0
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<=nums.length;j++) {
            let sum = 0
            for(let start=i;start<j;start++){
                sum+=nums[start]
            }
            if (sum==k) res++
        }
    }
    return res 
};

//Using Cumulative Sum time O(n^2) space O(n)
var subarraySum = function(nums, k) {
    let res = 0
    let sum = [0]
    
    for(let i=1;i<=nums.length;i++){
        sum[i] = sum[i-1] + nums[i-1]
    }
    
    for(let start=0;start<nums.length;start++){
        for(let end=start+1;end<=nums.length;end++){
            if(sum[end]-sum[start]==k)res++
        }
    }
    return res
};

//Without Space, time O(n^2) space O(n)
var subarraySum = function(nums, k) {
    let res = 0
    
    for(let start=0;start<nums.length;start++){
        let sum = 0
        for(let end=start;end<nums.length;end++){
            sum += nums[end]
            if(sum==k) res++
        }
    }
    return res
};

//hashMap time O(n) space O(n)
var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let sum = 0
    let res = 0
    for(let n of nums) {
        sum+=n
        if(map.has(sum-k)) {
            res+= map.get(sum-k)
        } 
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)    
        } else {
            map.set(sum,1)    
        }
    }
    console.log(map);
    return res
};
// let input = [1,2,1,2,1]
// let input2 = 3

// let input = [1,1,1]
// let input2 = 2

let input = [3,4,7,0,0,-7]
let input2 = 7
console.log(subarraySum(input,input2));

