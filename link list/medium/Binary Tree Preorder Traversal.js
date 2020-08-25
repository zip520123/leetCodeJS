/*Binary Tree Preorder Traversal

Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//time O(N) space O(N)
var preorderTraversal = function(root) {
    let res = []
    let dfs = (curr) => {
        if (curr == null) return
        res.push(curr.val)
        dfs(curr.left)
        dfs(curr.right)
    }
    dfs(root)
    return res
 };

//iteratively
var preorderTraversal = function(root) {
    let res = []
    if (root == null) return [] 
    let stack = [root]
    
    while(stack.length > 0) {
        let curr = stack.pop()
        res.push(curr.val)
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)

    }
    return res
};