/*Largest Number
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.*/
/**
 * @param {number[]} nums
 * @return {string}
 */
//time O(nlogn) space O(1) 
var largestNumber = function(nums) {
    nums.sort((a,b)=>{
        let s1 = a + "" + b
        let s2 = b + "" + a
        return s2 - s1
    })
    if(nums[0] == 0) return "0"
    return nums.join("")
};