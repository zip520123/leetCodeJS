/*Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//time O(nlogn)
//space O(n)
var findKthLargest = function(nums, k) {
  nums.sort((a,b)=>b-a)
  return nums[k-1]
};
//time O(nums * k)
//space O(n)
//we only need to sort k loop
var findKthLargest = function(nums, k) {
  for(let i=0;i<k;i++){
    for(let j=i+1;j<nums.length;j++){
      if (nums[i] < nums[j]){
        let temp = nums[i] 
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[k - 1]
};