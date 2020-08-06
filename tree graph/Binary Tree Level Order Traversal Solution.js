/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

function TreeNode(val,left,right) {
     this.val = val;
     this.left = left;
     this.right = right;
}
var levelOrder = function(root) {
  let res = []
  let nodes = []
  if (root) nodes.push(root)
  while(nodes.length > 0){
    let len = nodes.length
    let temp = []
    while(len > 0){
      len--
      let node = nodes.shift()
      if (node) temp.push(node.val)
      if(node.left)nodes.push(node.left)
      if(node.right)nodes.push(node.right)
    }
    res.push(temp)
  }
  return res
}



var levelOrder = function(root) {
  if (root == null) return []
  let res = []
  
  var order = (curr, height) => {
    if (height >= res.length) {
      res.push([])
    }
    res[height].push(curr.val)
    if (curr.left) order(curr.left, height + 1)
    if (curr.right) order(curr.right, height + 1)
  }
  order(root, 0)
  return res
}