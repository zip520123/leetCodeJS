/*Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7*/
   /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
  return helper(preorder,inorder, 0, 0, preorder.length - 1)
};
var helper = (preorder,inorder, index, start, end) => {
  if (start > end || index > inorder.length - 1) return null
  let node = new TreeNode(preorder[index])
  let val = preorder[index]
  
  let inIndex = 0
  for(let i=start;i<=end;i++){
      if (inorder[i] == val){
          inIndex = i
          break
      }
  }
  
  node.left = helper(preorder,inorder, index + 1, start, inIndex - 1)
  node.right = helper(preorder, inorder, index + 1 + inIndex - start, inIndex + 1, end)
  return node
}

var buildTree = function(preorder, inorder) {
  if (preorder.length == 0) return null
  let stack = []
  let root = new TreeNode(preorder[0])
  let curr = root
  let j = 0
  for(let i = 1; i< preorder.length;i++){
    if (curr.val != inorder[j]){
      curr.left = new TreeNode(preorder[i])
      stack.push(curr)
      curr = curr.left
    } else {
      j++
      while(stack.length && stack[stack.length - 1].val == inorder[j]) {
        curr = stack.pop()
        j++
      }
      curr.right = new TreeNode(preorder[i])
      curr = curr.right

    }
  }
  return root
}

//----
var buildTree = function(preorder, inorder) {
  const dfs = (index, left, right) => {
      if (left > right||index > inorder.length -1) return null
      
      
      let root = new TreeNode(preorder[index])
      let inIndex = 0
      for(let i=left;i<=right;i++){
          if(inorder[i] == preorder[index]) {
              inIndex = i
              break
          }
      }
      root.left = dfs(index+1, left, inIndex - 1)
      root.right = dfs(index+1 + inIndex - left, inIndex+1, right)
      
      return root
  }  
  return dfs(0,0,preorder.length - 1)
};