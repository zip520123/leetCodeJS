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
//space O(1)
var findKthLargest = function(nums, k) {
  nums.sort((a,b)=>b-a)
  return nums[k-1]
};
//time O(nlogn)
//space O(n)
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

//min Heap time O(N) space O(N)
var findKthLargest = function(nums, k) {
  let heap = []
  const add = (n) => {
    heap.push(n)
    let index = heap.length - 1
    while((index-1)>>1 >=0) {
      if (heap[(index-1)>>1] > heap[index]) {
        [heap[index], heap[(index-1)>>1]] = [heap[(index-1)>>1], heap[index]]
        index = (index-1)>>1
      } else {
        break
      }
    }
    if(heap.length >k) {
      remove()
    }
  }
  const remove = () => {
    if (heap.length == 0) return null
    let min = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    let i = 0
    while(heap[i * 2 + 1] != null) {
      let index = i * 2 + 1
      if (heap[index + 1] != null && heap[index+1] < heap[index] ) {
        index += 1
      }
      
      if (heap[i] > heap[index]) {
        [heap[i], heap[index]] = [heap[index], heap[i]]
        i = index
      } else {
        break
      }
    }
    return min
  }
  for(n of nums) {
    add(n)
  }
  let res = remove()
  
  return res
};

let input = [3,2,1,5,6,4]
let input2 = 2
console.log(findKthLargest(input, input2));