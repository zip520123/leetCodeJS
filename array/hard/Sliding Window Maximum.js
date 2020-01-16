/*Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note: 
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//time O(n^2)
//space O(n)
var maxSlidingWindow = function(nums, k) {
  if (nums.length < 1) return []
  //res = [nums[0]]
  let res = [nums[0]]
  //window = [nums[0]]
  let window = [nums[0]]
  //for i=1 i < nums.len i++
  for(i=1;i<nums.length;i++){
      // window push nums[i]
      let n = nums[i]
      window.push(n)
      // i < k 
      if (i < k){
        //res[0] = max(res[0],n)
          res[0] = Math.max(res[0],n) }    
      else {
          // if i >= k
          // window shift()
          window.shift()
          // max = window.max
          let max = Math.max(...window)
      // res push max    
          res.push(max)
      }
  }
  // return res
  return res
};


/*We scan the array from 0 to n-1, keep "promising" elements in the deque. The algorithm is amortized O(n) as each element is put and polled once.
我們搜索0- n-1, 確保promissing 在queue內，這個方法分攤讓每個element put and polled一次
At each i, we keep "promising" elements, which are potentially max number in window [i-(k-1),i] or any subsequent window. This means
每一次loop內的i 我們確保“promising”element， 可能是max number在window[i-(k-1),i] 或其他子window
If an element in the deque and it is out of i-(k-1), we discard them. We just need to poll from the head, as we are using a deque and elements are ordered as the sequence in the array
如果一個element 在queue內且超出i-(k-1),我們捨棄他，我們只需要把他從queue的頭部poll出來，因為我們使用一個queue，所以排序跟array一樣

Now only those elements within [i-(k-1),i] are in the deque. We then discard elements smaller than a[i] from the tail. This is because if a[x] <a[i] and x<i, then a[x] has no chance to be the "max" in [i-(k-1),i], or any other subsequent window: a[i] would always be a better candidate.
現在只有這些element [i-(k-1),i]在queue內，我們把尾端所有小於a[i]的element消除，因為如果a[x] < a[i]且x<i，那a[x]沒有任何機會在window[i-(k -1),i]成為最大的數，或是其他子window a[i]永遠都是比其他element大

As a result elements in the deque are ordered in both sequence in array and their value. At each step the head of the deque is the max element in [i-(k-1),i] 
最後在這個queue內element已經排序好了，每個step，這個queue的head就是window[i-(k-1),i]的最大數
*/
//time O(n)
//space O(n)
var maxSlidingWindow = function(nums, k) {
  if (nums.length == 0)return []
  let res = []
  let que = []
  nums.forEach((n,i)=>{
      while(que.length >0 &&que[que.length -1]<n){
          que.pop()
      }
      que.push(n)
      if(i>=k-1){
          res.push(que[0])
          if(que[0]==nums[i-(k-1)])que.shift()
      }
     })
  
  return res
};