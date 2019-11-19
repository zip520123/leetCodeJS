/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.*/
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
var isSymmetric = function(root) {
  let nodes = []
  if(root){
    nodes.push(root)
  }else{
    return true
  }
  
  while(nodes.length > 0){
    let n = nodes.length    
    let temp = []
    for(i=0;i<n;i++){
      let node = nodes.shift()
      if (node){
        temp.push(node.left)
        temp.push(node.right)
        nodes.push(node.left)
        nodes.push(node.right)
      }
    }
    let temp2 = temp.splice(0,temp.length / 2).reverse()
    for(i=0;i<temp.length;i++){
      if (temp[i] == null && temp2[i] != null) return false
      if (temp[i] != null && temp2[i] == null) return false
      if (temp[i] != null && temp2[i] != null)
       if (temp[i].val != temp2[i].val) return false
    }
  }
  return true
};

var isSymmetric = function(root) {
  //nodes = [root,root]
    let nodes = [root,root]
  //while(nodes.length > 0)
    while(nodes.length > 0){
  // node1 = nodes.pop()
      let node1 = nodes.pop()
  // node2 = nodes.pop()
      let node2 = nodes.pop()
  // if node1 == null && node2 == null continue
      if (node1 == null && node2 == null) continue
  // if node1 == null || node2 == null return false
      if (node1 == null || node2 == null) return false
  // if node1.val != node2.val return false
      if (node1.val != node2.val)return false
  // nodes.push(node1.left)
      nodes.push(node1.left)
  // nodes.push(node2.right)
      nodes.push(node2.right)
  // nodes.push(node1.right)
      nodes.push(node1.right)
  // nodes.push(node2.left)  
      nodes.push(node2.left)
    }
  
  //return true
    return true
  };