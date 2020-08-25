/*Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

 

Example:



BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
 

Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.*/
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
 */
var BSTIterator = function(root) {
    this.stack = []
    let curr = root
    while(curr) {
        this.stack.push(curr)
        curr = curr.left
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let curr = this.stack.pop()
    let res = curr.val
    curr = curr.right
    while(curr) {
        this.stack.push(curr)
        curr = curr.left
    }
    return res
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

//time O(N) space O(N)
var BSTIterator = function(root) {
    this.res = []
    let stack = []
    let curr = root
    while(stack.length >0||curr != null) {
        while(curr!= null) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        this.res.push(curr.val)
        curr = curr.right
    }
};

//time O(1)
BSTIterator.prototype.next = function() {
    let res = this.res.shift()
    return res
};

//time O(1)
BSTIterator.prototype.hasNext = function() {
    return this.res.length > 0
};
