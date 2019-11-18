/*Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
//if (l1 == null)
// return l2
  if (l1 == null) return l2
//if (l2 == null)
// return l1
  if(l2 == null) return l1
//if (l1.val > l2.val)
  if (l1.val > l2.val){
    // l1.next = mergeTwoLists(l1.next,l2)
    l1.next = mergeTwoLists(l1.next, l2)
// return l1
    return l1
  } else {
    //else 
// l2.next = mergeTwoLists(l1,l2.next)
    l2.next = mergeTwoLists(l1,l2.next)
// return l2
    return l2
  }
};

var mergeTwoLists = function(l1, l2) {
  if (!l1 && l2)return l2
  if (l1 && !l2)return l1
  if (!l1 && !l2) return null

  let head = null
  let res = null
  if (l1.val < l2.val){
    res = head = l1
    l1 = l1.next
  }else{
    res = head = l2
    l2 = l2.next
  }
  while(l1 != null && l2 != null){
      if (l1.val < l2.val){
        res.next = l1
        l1 = l1.next
      } else {
        res.next = l2
        l2 = l2.next
      }
    res = res.next
  }
  if (l1 != null) res.next = l1
  if (l2 != null) res.next = l2
  return head
  };