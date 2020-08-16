/*Sort List
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head||!head.next) return head
    
    let pre = head
    let slow = head
    let fast = head
    while(fast && fast.next) {
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }
    pre.next = null
          
    return marge(sortList(head), sortList(slow))
};

const marge = (l1, l2) => {
    let dummy = new ListNode()
    let curr = dummy
    while(l1&&l2){
        if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next
        } else{
            curr.next = l2
            l2 = l2 .next
        }
        curr = curr.next
    }
    curr.next = l1 ? l1:l2
    
    return dummy.next
}