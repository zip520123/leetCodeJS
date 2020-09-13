// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) { return 0 }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
//time O(n) space O(n)
var maxDepth = function(root) {
    let max = 0
    let dfs = (curr,count) => {
        if(curr==null) return 
        count++
        max = Math.max(count,max)
        dfs(curr.left,count)
        dfs(curr.right,count)
    }
    dfs(root,0)
    return max
};