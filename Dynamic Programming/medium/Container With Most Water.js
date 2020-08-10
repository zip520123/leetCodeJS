/*Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 



The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49*/
/**
 * @param {number[]} height
 * @return {number}
 */
//time O(n^2) space O(1)
var maxArea = function(height) {
    let max = 0
    for(let i= 0;i<height.length-1;i++) {
        for(let j=i+1;j<height.length;j++) {
            let localMin = height[i] < height[j] ? height[i] : height[j]
            let distance = (j - i)
            let contains = localMin * distance
            max = contains > max ? contains : max
        }
    }
    return max
};

//time O(n) space O(1)
var maxArea = function(height) {
    let max = 0
    let l = 0
    let r = height.length - 1
    while(l < r) {
        let distance = r - l
        let h = height[l] < height[r] ? height[l] : height[r]
        let contain = distance * h
        max = max > contain ? max : contain
        if (height[l] > height[r]) {
            r--
        } else{
            l++
        }
        
    }
    return max
};