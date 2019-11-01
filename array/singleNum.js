/**
 * @param {number[]} nums
 * @return {number}
 */

/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */
// list
// var singleNumber = function(nums) {
//     var list = []
//     for (let i = 0; i < nums.length; i+=1) {
//         var char = nums[i]
//         //find char in list
//         var find = list.find((number) => {
//             return number == char
//         })
//         //if not find, add 
//         if (find == undefined) {
//             list.push(char)
//         } else {
//             //else remove exist
//             var index = list.indexOf(find)
//             list.splice(index, 1)
//         }
//     }
//     return list[0]
// };

// set
var singleNumber = function(nums) {
    // set(nums) * 2 - nums
    let set = new Set(nums)
    let arr1 = [...set].reduce((p,c) => {return p + c})
    let arr2 = nums.reduce((p,c) => {return p + c})
    return 2 * arr1 - arr2
}
console.log(singleNumber([2,2,1]) == 1)
console.log(singleNumber([1,0,1]) == 0)
console.log(singleNumber([4,1,2,1,2]) == 4)