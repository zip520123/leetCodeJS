/*Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  stack = []
  curr = root
  res = []
  while(curr != null || stack.length > 0){
    while(curr != null){
      stack.unshift(curr)
      curr = curr.left
    }
    node = stack.shift()
    res.push(node.val)
    curr = node.right     
  }
  return res
};

// var inorderTraversal = function(root) {
//   return helper(root, [])
// };
// const helper = (node, res) => {
//   if (node) {
//     if(node.left) helper(node.left,res)
//     res.push(node.val)
//     if(node.right) helper(node.right,res)
//   }
//   return res
// }