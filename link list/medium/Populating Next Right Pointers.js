/*You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The '#' from the output is a sentinel which signifies the end of each level.
 

Constraints:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.
  */

  /**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

  if (!root) return null
  nodes = [root]
  while(nodes.length > 0){
      temp = nodes.splice(0,nodes.length)
      for (i=0;i<temp.length;i++){
       temp[i].next = temp[i + 1]
       if (temp[i].left) nodes.push(temp[i].left)
       if (temp[i].right) nodes.push(temp[i].right)       
      }

  }

  return root  
};