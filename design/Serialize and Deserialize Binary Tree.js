/*Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return JSON.stringify(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let tree = JSON.parse(data)
    return  tree == null ? null : buildTree(new TreeNode(tree.val),tree)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const buildTree = (root, tree) => {
  if(tree.left)root.left = buildTree(new TreeNode(tree.left.val),tree.left)
  if(tree.right)root.right = buildTree(new TreeNode(tree.right.val),tree.right)
  return root
}

//iterative
var serialize = function(root) {
  if (!root) return "[]"
  nodes = [root]
  res = []
  index = 0
  while(index < nodes.length){
    temp = nodes.slice(index,nodes.length)
    temp.forEach(node => {
      if (node != null){
        res.push(node.val)
        nodes.push(node.left)
        nodes.push(node.right)
      }else{
        res.push(null)
      }
      index ++    
    })
  }
  return JSON.stringify(res)
};
var deserialize = function(data) {
  let arr = JSON.parse(data)
  if (arr.length == 0) return null
  arr[0] = new TreeNode(arr[0])
  ptr = 0
  for(i=0;i<arr.length;i++){
    if (arr[i] != null){
      ptr ++
      arr[ptr] = arr[ptr] == null ? null : new TreeNode(arr[ptr])
      arr[i].left = arr[ptr]
       
      ptr ++
      arr[ptr] = arr[ptr] == null ? null : new TreeNode(arr[ptr])
      arr[i].right = arr[ptr]
    }
  }
  return arr[0]
};
