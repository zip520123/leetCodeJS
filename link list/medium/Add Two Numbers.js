/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.*/
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
var addTwoNumbers = function(l1, l2) {
  if (l1 == null && l2 == null)return null
  if (l1 != null && l2 == null)return l1
  if (l2 != null && l1 == null)return l2
  carry = (l1.val + l2.val) >= 10 ? 1 : 0
  res = head = new ListNode((l1.val + l2.val) % 10)   
  l1 = l1.next
  l2 = l2.next
  while(l1 && l2){
    val = l1.val + l2.val + carry
    carry = val >= 10 ? 1 : 0
    head.next = new ListNode(val % 10)
    head = head.next
    l1 = l1.next
    l2 = l2.next
  }
  while(l1){ 
      val = l1.val + carry
      carry = val >= 10 ? 1 : 0
      head.next = new ListNode(val % 10)
      head = head.next
      l1 = l1.next
  }
  while(l2){
      val = l2.val + carry
      carry = val >= 10 ? 1 : 0
      head.next = new ListNode(val % 10)
      head = head.next
      l2 = l2.next
  }
  if (!l1 && !l2 && carry == 1){
      head.next = new ListNode(1)
  }
    return res
};