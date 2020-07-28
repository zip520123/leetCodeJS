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

 /*if(node == null) { return true }
    var val = node.val
    if (lower != null && val <= lower) return false
    if (upper != null && val >= upper) return false

    if (helper(node.right, val, upper) == false) return false
    if (helper(node.left, lower, val ) == false) return false

    return true */
var helper = function(node, lower, upper) {
    if (node == null) return true
    var val = node.val
    if (lower != null && lower >= val) return false
    if (upper != null && upper <= val) return false
    if (helper(node.left, lower, val) == false) return false
    if (helper(node.right, val, upper) == false) return false
    return true
}

var isValidBST = function(root) {
    return helper(root, null, null)
};


