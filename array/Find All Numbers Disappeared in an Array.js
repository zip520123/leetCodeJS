/*Find All Numbers Disappeared in an Array
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//time O(n) space O(n)
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums)
    let res = []
    for(let i=1;i<=nums.length;i++){
        if(set.has(i)== false)res.push(i)
    }
    return res
};

//time O(n) space O(1) or O(n) 
var findDisappearedNumbers = function(nums) {
    let res = []
    for(let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i]) - 1
        if (nums[index] > 0) {
            nums[index] = -1 * nums[index]
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0) {
            res.push(i+1)
        }
    }
    return res
};