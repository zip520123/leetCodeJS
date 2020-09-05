/*Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k = nums.length - 2
    while(k >=0) {
        if(nums[k] < nums[k+1]) break
        k--
    }
    if(k<0){
        nums.reverse()
        return
    }
    let l = nums.length - 1
    while(l > k) {
        if(nums[l] >nums[k]) break
        l--
    }
    [nums[l], nums[k]] = [nums[k],nums[l]]
    let i = k+1
    let j = nums.length - 1
    while(i<j) {
        [nums[i], nums[j]] = [nums[j],nums[i]]
        i++;j--
    }
    
};