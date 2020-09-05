/*Binary Tree Maximum Path Sum
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity
    
    let dfs = (curr) => {
        if(curr == null) return 0
        let left = Math.max(0, dfs(curr.left))
        let right = Math.max(0,dfs(curr.right))
        max = Math.max(max, curr.val + left + right)
        return Math.max(left,right) + curr.val
    }
    
    dfs(root)
    
    return max
};
// let input = [-10,9,20,null,null,15,7]
//let input = [1,2,3]
//   -10
//   / \
//  9  20
//    /  \
//   -1   7
let input = [-10,-11,-20,null,null,-1,-2]

let buildTree = (i) => {
    if (input[i] == null) return null
    let node = new TreeNode(input[i])
    node.left = buildTree(i*2 + 1)
    node.right = buildTree(i*2 + 2)
    return node
}

let root = buildTree(0)
console.log(root);

console.log(maxPathSum(root));