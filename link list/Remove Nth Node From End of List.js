/*Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  if (n == 0) return head

  let arr = []
    
  let curr = head
  while(curr != null){
    arr.push(curr)   
    curr = curr.next
  }
  
  let node = arr[arr.length - n]
  if (node.next){
    node.val = node.next.val
    node.next = node.next.next
  }else{
    let prev = arr[arr.length - n - 1]
    if (prev) prev.next = null
    else return null
  }
  return head
};