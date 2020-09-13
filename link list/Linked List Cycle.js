/*Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


 

Follow up:

Can you solve it using O(1) (i.e. constant) memory?*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//hashTable 
//time O(N)
//space O(N)
var hasCycle = function(head) {
  let set = new Set()
  let curr = head
  while(1){
    if (curr == null) return false
    if (set.has(curr)) return true
    set.add(curr)
    curr = curr.next
  }
};

var hasCycle = function(head) {
  let set = new Set()
  let curr = head
  while(curr){
      if(set.has(curr)) return true
      set.add(curr)
      curr = curr.next
  }
  return false
};

//two pointers time O(n) or O(n+k) space O(1)
var hasCycle = function(head) {
  if(head == null) return false
  
  let fast = head
  let slow = head
  
  while(fast && slow) {
      if(fast.next ==null) return false
      slow = slow.next
      fast = fast.next.next
      if(fast == slow) return true
  }
  
  return false
};