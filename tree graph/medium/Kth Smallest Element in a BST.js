/*Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//space O(N)
//time O(N)
//recursive
var kthSmallest = function(root, k) {
    let arr = inorder(root,[])
    return arr[k-1]
};
const inorder = (root,arr) => {
  if(root == null)return
  inorder(root.left,arr)
  arr.push(root.val)
  inorder(root.right,arr)
  return arr
}
//iteration
//space O(N)
//time O(N)
var kthSmallest = function(root, k) {
    let stack = []
    while(1){
      while(root != null){
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      if(--k == 0) return root.val
      root = root.right
    }
};
