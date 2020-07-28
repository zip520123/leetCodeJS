/*Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  nodes = []
  if (root) nodes.push(root)
  
  zigzag = false
  res = []
  while(nodes.length > 0){
      tempArr = []
      temp = nodes.splice(0,nodes.length)
      temp.forEach(node =>{
       tempArr.push(node.val)
          if (node.left) nodes.push(node.left)
          if (node.right) nodes.push(node.right)        
      }) 
      if (zigzag) tempArr.reverse()
      zigzag = !zigzag  
      res.push(tempArr)
  }
  return res
};