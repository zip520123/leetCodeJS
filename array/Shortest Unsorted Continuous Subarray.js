/*Shortest Unsorted Continuous Subarray
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
//brute force time O(n^2) space O(1)
var findUnsortedSubarray = function(nums) {
    let left = nums.length, right=0
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j] < nums[i]) {
                left = Math.min(left,i)
                right = Math.max(right,j)
            }
        }
    }
    return right-left < 0 ? 0 : (right-left + 1)
};

//sort time O(nlogn) space O(n)
var findUnsortedSubarray = function(nums) {
    let nums2 = nums.slice().sort((a,b)=>a-b)
    let start = nums2.length, end = 0
    for(let i=0;i<nums2.length;i++){
        if(nums2[i] != nums[i]) {
            start = Math.min(start,i)
            end = Math.max(end,i)
        }
    }
    return end-start < 0 ? 0: end - start +1
};

//Using Stack time O(n) space O(n)
var findUnsortedSubarray = function(nums) {
    let stack = []
    let left = nums.length, right = 0
    for(let i=0;i<nums.length;i++){
        while(stack.length > 0 && nums[stack[stack.length-1]] > nums[i]){
            let curr = stack.pop()
            left = Math.min(left,curr)
        }
        stack.push(i)
    }
    stack = []
    for(let i=nums.length-1;i>=0;i--){
        while(stack.length>0 && nums[stack[stack.length-1]]<nums[i]){
            let curr = stack.pop()
            right = Math.max(right,curr)
        }
        stack.push(i)
    }
    return right - left <0 ? 0: right-left+1
};



// let input = [2,6,4,8,10,9,15]
// let input = [1,2,3,4,3,2]
let input = [3,4,5,6,7,1,2]
console.log(findUnsortedSubarray(input));