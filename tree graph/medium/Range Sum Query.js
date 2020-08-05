/*307. Range Sum Query - Mutable
s
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.

Example:

Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
 

Constraints:

The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
0 <= i <= j <= nums.length - 1*/

/**
 * @param {number[]} nums
 */ 
//time O(1)
//space O(N)
// var NumArray = function(nums) {
//     this.nums = nums
// };

// /** 
//  * @param {number} i 
//  * @param {number} val
//  * @return {void}
//  */
// //time O(1)
// //space O(1)
// NumArray.prototype.update = function(i, val) {
//     this.nums[i] = val
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// //time O(N)
// //space O(1)
// NumArray.prototype.sumRange = function(i, j) {
//     let sum = 0
//     for(let index=i;i<=j;i++) {
//         sum += this.nums[i]
//     }
//     return sum
// };

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

//segment tree
//time O(N)
//space O(N)
 var NumArray = function(nums) {
    this.nums = nums
    
    this.tree = []
    buildTree(nums,this.tree, 0, nums.length - 1, 0)
    
};

var buildTree = (nums, tree, left, right, index) => {
    if (left > right) return 0
    if (left == right) {
        tree[index] = nums[left]
        return nums[left]
    }
    let mid = left + ((right - left) >> 1)
    let sum = buildTree(nums, tree, left, mid, index * 2 + 1) + buildTree(nums, tree, mid + 1, right, index * 2 + 2)  
    tree[index] = sum
    return sum
}

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
//time O(N)
//space O(N)
NumArray.prototype.update = function(i, val) {
    // this.tree[i + this.nums.length] = val
    // i += this.nums.length
    // while (i > 1){
    //     this.tree[i >> 1] = this.tree[i] + this.tree[i ^ 1]
    //     i >>= 1
    // }
    this.nums[i] = val
    let upd = (left, right, index) => {
        if (left == right && left == i) {
            this.tree[index] = val
            return val
        }

        if (i >= left && i <= right){   
            let mid = left + ((right - left) >> 1)
            
            this.tree[index] = upd(left, mid,index * 2 + 1) + upd(mid+1, right, index * 2 + 2)
            
        }
        return this.tree[index]
    }
    upd(0,this.nums.length -1, 0)
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
//
NumArray.prototype.sumRange = function(i, j) {
    // let sum = 0
    // let l = i + this.nums.length
    // let r = j + this.nums.length
    // while(l < r) {
    //     if ((l%2) == 1) {
    //         sum += this.tree[l]
    //         l++
    //     }
    //     if ((r % 2 == 1)) {
    //         r--
    //         sum += this.tree[r]
            
    //     }
    //     l = l / 2 | 0
    //     r = r / 2 | 0
    // }
    // return sum

    let sumR = (left, right, index) => {
        //inside
        if (left >= i && right <= j) return this.tree[index]
        //outside
        if (left >j || right <i) return 0
        //partially overlap
        let mid = left + ((right - left) >> 1)
        return sumR(left, mid, index * 2 + 1) + sumR(mid + 1,right, index* 2 + 2)
 
    }
    return sumR(0,this.nums.length - 1, 0)
};

// let input = ["NumArray","sumRange","update","sumRange"]
// let input2 = [[[1,3,5]],[0,2],[1,2],[0,2]]
let input =  ["NumArray","sumRange","sumRange","sumRange","update","update","update","sumRange","update","sumRange","update"]
let input2 = [[[0,9,5,7,3]],[4,4],[2,4],[3,3],[4,5],[1,7],[0,8],[1,2],[1,9],[4,4],[3,4]]

// let input = ["NumArray","update","sumRange","sumRange","update","sumRange"]
// let input2 = [[[9,-8]],[0,3],[1,1],[0,1],[1,-3],[0,1]]
let obj = new NumArray(input2[0][0])
for(let i=1;i<input.length;i++) {
    let c = input[i]
    if (c == "sumRange") {
        console.log(obj.sumRange(input2[i][0],input2[i][1]))
    }
    if (c == "update") {
        obj.update(input2[i][0],input2[i][1])
    }
}

console.log(obj)