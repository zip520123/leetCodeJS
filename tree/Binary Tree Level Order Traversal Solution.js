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
  res = []
  nodes = []
  //check root
  if (root) nodes.push(root)
  //while nodes.length > 0
  while(nodes.length > 0) {
    // newArr = []
    newArr = []
    // pop current node in nodes
    // let len = nodes.len
    // while len
    let len = nodes.length
    while (len > 0){
      len --
      //   newArr.push node.val
      node = nodes.shift()
      newArr.push(node.val)
      //   if node.left push nodes.left nodes
      if (node.left) nodes.push(node.left)
      //   if node.right push nodes.right nodes
      if (node.right) nodes.push(node.right)

    }
    // res push newArr
    res.push(newArr)
  }
  //return res
  return res
}

// var levelOrder = function(root) {
//   let res = []
//   let nodes = []
//   // check
//   if (root) nodes.push(root)
//   //while node.length > 0
//   while( nodes.length > 0) {
//     // newArr = []
//     newArr = []
//     let len = nodes.length 
//     // current node in nodes
//     while(len > 0) {
//       len -= 1
//       // push node.val 
//       let node = nodes.shift()
//       newArr.push(node.val)
      
//       // push node.left node.right nodes
//       if (node.left) nodes.push(node.left)
//       if (node.right) nodes.push(node.right)
//     }
//     //res push newArr
//     res.push(newArr)
//   }
//   return res
// }

// var levelOrder = function(root) {
//   let res = []
//   nodes = []
//   if (root) nodes.push(root)

//   while (nodes.length > 0) {
//     current = []
//     let len = nodes.length
//     for (i = 0; i< len; i+=1) {
//       let node = nodes.shift()
//       current.push(node.val)
//       if (node.left) nodes.push(node.left)
//       if (node.right) nodes.push(node.right)

//     }
//     res.push(current)
//   }
//   return res
// }

