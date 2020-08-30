/*Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//burte force O(NlogN) space O(N)
var mergeKLists = function(lists) {
  if (lists.length == 0)  return null
  let root = new ListNode(-1)
  let queue = []
  for(let list of lists) {
      let curr = list
      while(curr) {
          queue.push(curr.val)
          curr = curr.next
      }
      
  }
  queue.sort((a,b)=>a-b)
  let curr = root
  while(queue.length >0) {
      let val = queue.shift()
      let node= new ListNode(val)
      curr.next = node
      curr = curr.next
  }
  return root.next
};

//time O(N) space O(1)
var mergeKLists = function(lists) {
  if (lists.length == 0)return null
  return lists.reduce((mergeTwoList))
}

const mergeTwoLists = (l1,l2) => {
  head = new ListNode(0)
  curr = head
  while(l1 && l2){
    if (l1.val < l2.val){
      curr.next = l1
      l1 = l1.next
    }else{
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  curr.next = l1 || l2
  return head.next
}