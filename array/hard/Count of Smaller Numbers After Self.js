/*Count of Smaller Numbers After Self
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 

Constraints:

0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//brute force time(n^2) space O(N)
var countSmaller = function(nums) {
    let res = []
    for(let i=0;i<nums.length;i++){
        let n = nums[i]
        let curr = 0
        for(let j=i+1;j<nums.length;j++){
            if (nums[j]<n) {
                curr ++
            }
        }
        res.push(curr)
    }
    return res
};

//tree time O(N^2),  space O(N)
var countSmaller = function(nums) {
    if(nums.length ==0) return []
    let res = [0]
    let root = new Node(nums[nums.length - 1])
    for(let i=nums.length-2;i>=0;i--){
        res.unshift(insert(root,nums[i]))
    }
    console.log(root)
    return res
};

let insert = (root, n) => {
    let curr = root
    let isConnect = false
    let res = 0
    let node = new Node(n)
    while(isConnect == false) {
        if (curr.val < n) {
            res += curr.count
            if (curr.right) {
                curr = curr.right    
            } else {
                isConnect = true
                curr.right = node
            }
        } else {
            curr.count += 1
            if (curr.left) {
                curr = curr.left
            }else {
                isConnect = true
                curr.left = node
            }
        }
    }
    return res
}
var Node = function(num) {
    this.val = num
    this.count = 1
    this.left = null
    this.right = null
}
// let input = [5,2,6,1]
let input = [1,0,2]
console.log(countSmaller(input));