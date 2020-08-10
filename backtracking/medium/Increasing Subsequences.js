/*Increasing Subsequences
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2.

 

Example:

Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 

Constraints:

The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var findSubsequences = function(nums) {
//     if (nums.length == 0) return []
//     let set = new Set()
//     let res = [[]]
//     nums.forEach(n=>{
//         let temp = res.slice()
//         temp.forEach(token=>{
//             if (token.length == 0) {
//                 res.push([n])
//             } else {
//                 let char = token.slice()
//                 if (char[char.length-1] <= n) {
//                     char.push(n)
//                     res.push(char)
//                 }
//             }
//         })
//     })
//     let res2 = []
//     res.forEach(list=>{
//         if(list.length > 1 && set[list.join('')] == null) {
//             res2.push(list)
//             set[list.join("")] = 1
//         }
//     })
//     return res2
// };


// console.log(findSubsequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    if (nums.length == 0) return []
    let res = []

    let dfs = (list,index) => {
        if(list.length > 1) res.push(list.slice())
        let set = new Set()
        for(let i=index;i<nums.length;i++){
            if(set.has(nums[i])) continue
            if(list.length == 0 || nums[i] >= list[list.length - 1]) {
                set.add(nums[i])
                list.push(nums[i])
                dfs(list, i+1)
                list.pop()
            }
        }
    }

    dfs([],0)
    return res
 };

 console.log(findSubsequences([4,6,7,7]));