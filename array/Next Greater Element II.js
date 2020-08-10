/*Next Greater Element II
Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//time O(N ^2) space O(N)
var nextGreaterElements = function(nums) {
    let res = []
    next: for(let i=0;i<nums.length;i++) {
        let n = nums[i]
        for(let j=i;j<nums.length;j++) {
            if (nums[j] > n) {
                res.push(nums[j])
                continue next
            }
        }
        for(let j=0;j<i;j++) {
            if (nums[j] > n) {
                res.push(nums[j])
                continue next
            }
        }
        res.push(-1)
    }
    return res
};

//time O(N) sapce O(N)
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []
    let n = nums.length
    for(let i=0;i<n * 2 ;i++) {
        while(stack.length >0 && nums [stack[stack.length - 1]] < nums[i %n]) {
            let index = stack.pop()
            res[index] = nums[i % n]
        }
        
        if (i < n) {
            stack.push(i % n)
        }
        
    }
    return res
};