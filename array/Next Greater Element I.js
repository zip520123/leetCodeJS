/*496. Next Greater Element I
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//time O(N^2) space O(N)
var nextGreaterElement = function(nums1, nums2) {
    let res = []
    next: for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if (nums1[i] == nums2[j]) {
                for(let k=j;k<nums2.length;k++){
                    if (nums2[k] > nums2[j]) {
                        res.push(nums2[k])
                        continue next
                    }
                }
            } 
        }
        res.push(-1)
    }
    return res
};

//time O(N) space O(N)
/*Suppose we have a decreasing sequence followed by a greater number
For example [5, 4, 3, 2, 1, 6] then the greater number 6 is the next greater element for all previous numbers in the sequence

We use a stack to keep a decreasing sub-sequence, whenever we see a number x greater than stack.peek() we pop all elements less than x and for all the popped ones, their next greater element is x
For example [9, 8, 7, 3, 2, 1, 6]
The stack will first contain [9, 8, 7, 3, 2, 1] and then we see 6 which is greater than 1 so we pop 1 2 3 whose next greater element should be 6≈≈
*/

var nextGreaterElement = function(nums1, nums2) {
    let map = {}
    let stack = []
    for(let n of nums2) {
        if (stack.length == 0 || stack[stack.length -1] > n){
            stack.push(n)
        } else if (stack[stack.length -1] < n) {
            while(stack[stack.length -1] < n) {
                let a = stack.pop()
                map[a] = n
            }
            stack.push(n)
        }
    }
    let res = []
    for(let n of nums1){
        if (map[n] != null) {
            res.push(map[n])
        } else {
            res.push(-1)
        }
    }
    return res
};
