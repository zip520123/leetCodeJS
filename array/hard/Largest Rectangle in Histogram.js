/*Largest Rectangle in Histogram
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

 


The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

Example:

Input: [2,1,5,6,2,3]
Output: 10*/
/**
 * @param {number[]} heights
 * @return {number}
 */
//time O(N^2) space O(1)
var largestRectangleArea = function(heights) {
    let max = 0
    for(let i=0;i<heights.length;i++) {
        let hight = heights[i]
        for(let j=i;j<heights.length;j++){
            if (heights[j] < hight) {
                hight = heights[j]
            }
            let weight = j - i + 1
            let retangle = hight * weight
            max = Math.max(max,retangle)
        }
    }
    
    return max
};

//skip min we already caculate
//time O(N^2) space O(1)
var largestRectangleArea = function(heights) {
    let max = 0
    let minHeight = 0
    for(let i=0;i<heights.length;i++) {
        let hight = heights[i]
        if (hight == minHeight) continue
        for(let j=i;j<heights.length;j++){
            if (heights[j] < hight) {
                hight = heights[j]
            }
            let weight = j - i + 1
            let retangle = hight * weight
            max = Math.max(max,retangle)
        }
        if(minHeight > hight) minHeight = hight
    }
    return max
};

//extend boundary time O(N^2) space O(1)
var largestRectangleArea = function(heights) {

    let max = 0
    for(let i=0;i<heights.length;i++){
        let hight = heights[i]
        let left = i
        let right = i
        
        while(left > 0 && heights[left - 1] >= hight ) {
            left--
        }
        while(right < heights.length - 1 && heights[right + 1] >=hight ) {
            right++
        }
        let weight = right - left + 1
        let rect = weight * hight
        max = Math.max(max,rect)
    }
    
    return max
};


//stack time O(N) space O(N)
var largestRectangleArea = function(heights) {
    let stack = []
    let max = 0
    let i = 0
    let caculate = () => {
        let heightIndex = stack.pop()
        let height = heights[heightIndex]
        if(stack.length == 0) {
            let size = height * i
            max = Math.max(max,size)
        } else {
            let size = height * (i - stack[stack.length - 1] - 1)
            max = Math.max(max,size)
        }
    }
    while(i<heights.length) {
        if (stack.length == 0 || heights[stack[stack.length -1]] <= heights[i] ) {
            stack.push(i)
            i++
        } else {
            caculate()
        }
        
    }
    while(stack.length >0){
        caculate()
    }
    return max
};

let input = [2,1,5,6,2,3]
console.log(largestRectangleArea(input));