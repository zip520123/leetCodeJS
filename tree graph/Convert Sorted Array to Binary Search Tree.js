/*Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  //create Binary search tree function
  //func(nums,0,nums.length - 1)
  return createTree(nums,0,nums.length - 1)
};

const createTree = (nums,left,right) => {
//if right < left return NULL
  if (right < left) return null
//mid = (left + right) / 2 | 0
  let mid = (left + right ) / 2 | 0
//newtree(nums[mid])
  let tree = new TreeNode(nums[mid])
//tree.left = createTree(nums, left, mid - 1)
  tree.left = createTree(nums,left, mid - 1)
//tree.right = createTree(nms,mid + 1, right)
  tree.right = createTree(nums,mid + 1, right)
//return tree
  return tree
}
