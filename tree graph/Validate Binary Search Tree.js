// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//recursive time O(N) space O(N)
var isValidBST = function(root) {
    let dfs = (curr, low, hight) => {
        if (curr == null) return true    
        if(curr.val <= low) return false
        if(curr.val >= hight) return false
        return dfs(curr.left, low, curr.val) && dfs(curr.right, curr.val, hight)
    }
    
    return dfs(root,-Infinity, Infinity)
};
//Iteration time O(N) space O(N)
var isValidBST = function(root) {
    if (root == null) return true
    let nodeStack = [root]
    let lowStack = [-Infinity]
    let upperStack = [Infinity]
    
    while(nodeStack.length > 0) {
        let curr = nodeStack.pop()
        let low = lowStack.pop()
        let upper = upperStack.pop()
        if (curr.val <= low || curr.val >= upper ) {
            return false    
        }
        if (curr.left != null){
            nodeStack.push(curr.left)
            lowStack.push(low)
            upperStack.push(curr.val)    
        }
        
        if (curr.right != null) {
            nodeStack.push(curr.right)
            lowStack.push(curr.val)
            upperStack.push(upper)    
        }
        
    }
    return true
};
