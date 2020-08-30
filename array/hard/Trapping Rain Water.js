/*Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */
//brute force time O(n^2) space O(1)
var trap = function(height) {
    let res = 0
    for(let i=1;i<height.length-1;i++){
        let leftMax =0
        let rightMax = 0
        for(let left = 0;left<i;left++){
            leftMax = Math.max(leftMax, height[left])
        }
        for(let right = height.length - 1;right>=i+1;right--){
            rightMax = Math.max(rightMax, height[right])
        }
        let curr = Math.min(leftMax,rightMax) - height[i]
        if (curr > 0) res += curr
    }
    return res
};

//dp time O(n) space O(n)
var trap = function(height) {
    let res = 0
    let dp1 = new Array(height.length).fill(0)
    dp1[0] = height[0]
    let dp2 = new Array(height.length).fill(0)
    dp2[height.length - 1] = height[height.length -1] 
    
    for (let i=1;i<height.length-1;i++) {
        dp1[i] = Math.max(dp1[i-1], height[i])
    }
    
    for (let i=height.length - 2;i>=0;i--) {
        dp2[i] = Math.max(dp2[i+1], height[i])
    }

    for(let i=1;i<height.length-1;i++) {
        let leftMax = dp1[i]
        let rightMax = dp2[i]

        let curr = Math.min(leftMax,rightMax) - height[i]
        
        if (curr > 0) res += curr
    }
    return res
};

//pointer time O(n) space O(1)
var trap = function(height) {
    let res = 0
    let leftMax = 0
    let rightMax =0
    let left = 0, right = height.length -1
    while(left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
               leftMax = height[left] 
            } else {
                res += leftMax - height[left]
            }
            left++
        } else {
            if(height[right]>=rightMax) {
                rightMax = height[right]
            } else {
                res += rightMax - height[right]
            }
            right--
        }
    }
    return res
};

let input = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(input));