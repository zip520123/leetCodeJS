/*Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//time O(m+n) space O(m+n)
var findMedianSortedArrays = function(nums1, nums2) {
    
    if(nums1.length == 0 || nums2.length == 0) {
        let arr = nums1.length > 0 ? nums1 : nums2
        let n = arr.length
        if(n%2 == 0) {
            return (arr[n>>1] + arr[(n>>1) - 1]) / 2    
        } else {
            return arr[n>>1]
        }
    }
    let arr = []
    let p1 = 0
    let p2 = 0
    while(p1 <nums1.length &&p2<nums2.length) {
        if(nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1])
            p1++
        } else {
            arr.push(nums2[p2])
            p2++
        }
    }
    
    for(let i= p1;i<nums1.length;i++) {
        arr.push(nums1[i])
    }
    for(let i=p2;i<nums2.length;i++) {
        arr.push(nums2[i])
    }
    
    let n = arr.length
    if(n%2 == 0) {
        return (arr[n>>1] + arr[(n>>1) - 1]) / 2    
    } else {
        return arr[n>>1]
    }
};

//binary search time O(log(m+n)) space O(1)
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    if (n1 > n2) return findMedianSortedArrays(nums2,nums1)
    let k = (n1 + n2 + 1) >> 1
    let left = 0
    let right = n1
    while(left<right) {
        let mid1 = left + ((right - left )>>1)
        let mid2 = k - mid1
        if(nums1[mid1] < nums2[mid2 - 1]) {
            left = mid1 + 1
        } else {
            right = mid1
        }
    }
    
    let mid1 = left
    let mid2 = k-left
    let c1 = Math.max(mid1<=0 ? -Infinity : nums1[mid1-1], mid2<=0? -Infinity:nums2[mid2-1])
    
    if((n1+n2)%2==1) return c1
    
    let c2 = Math.min(mid1>=n1 ? Infinity: nums1[mid1], mid2>=n2? Infinity: nums2[mid2])
    
    return (c1 + c2) * 0.5
    
};