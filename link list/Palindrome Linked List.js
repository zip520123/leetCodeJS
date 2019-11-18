/*Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?*/
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
var isPalindrome = function(head) {
//arr
  let arr = []
  let curr = head
  while(curr != null){
    arr.push(curr.val)
    curr = curr.next
  }

//arr2 = arr.reverse
  let arr2 = arr.slice().reverse()

//return arr == arr2
  return arr.join("") == arr2.join("")
};
