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
    // console.log(temp,temp2)
    for(i=0;i<temp.length;i++){
      if (temp[i] == null && temp2[i] != null) return false
      if (temp[i] != null && temp2[i] == null) return false
      if (temp[i] != null && temp2[i] != null)
       if (temp[i].val != temp2[i].val) return false
    }
  }
  return true
};