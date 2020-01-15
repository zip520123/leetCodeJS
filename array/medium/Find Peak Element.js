/*A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:

Your solution should be in logarithmic complexity.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for(let i=0;i<nums.length;i++){
      if (i == 0){
        if (nums[i] > -Infinity && nums[i] > nums[i+1]){
          return i
        }
      } else if (nums[i] > nums[i - 1] && nums[i]> nums[i+1]){
        return i
      } else if(i==nums.length - 1){
        if (nums[i] > -Infinity && nums[i] > nums[i-1]){
          return i
        }
      }
    }
    return 0
};

//time O(n)
//acturlly we don't have to compare nums[i - 1], because prevous loop already compare, nums[i - 1] > nums[i]
var findPeakElement = function(nums) {
  for(let i=0;i<nums.length;i++){
    if(nums[i] > nums[i+1])return i
  }
  return nums.length - 1
}

//time O(log n)
var findPeakElement = function(nums) {
    return search(nums,0,nums.length - 1) 
}

var search = (nums, l,r) =>{
  if (l == r)return l
  let mid = (l + r) / 2 | 0
  if(nums[mid] > nums[mid + 1]){
    return search(nums,l,mid)
  }
  return search(nums, mid + 1,r)
}

//iterative time O(log n)
var findPeakElement = function(nums) {
  let l = 0, r=nums.length -1
  while(l!=r){
    let mid = (l+r)/2 |0
    if(nums[mid]<nums[mid+1]){
      l = mid + 1
    }else{
      r = mid
    }
  }
  return l
}
