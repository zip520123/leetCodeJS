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
  // if (root) nodes.push(root)
  if (root) nodes.push(root)
  // while(nodes.length > 0)
  while(nodes.length > 0){
    //  let len = nodes.length
    let len = nodes.length
  //  temp = []
    let temp = []
  //  while(len > 0)
    while(len > 0){
      //   len--
      len--
  //   node = nodes.shift()
      let node = nodes.shift()
  //   if node temp.push(node.val)
      if (node) temp.push(node.val)
  //   if node.left nodes push(node.left)
      if(node.left)nodes.push(node.left)
  //   if node.right nodes.push(nodes.right)
      if(node.right)nodes.push(node.right)
    }
  
  // res.push(temp)
    res.push(temp)
  }
  
  //return res
  return res
}

