/*Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example:



Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
 

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.*/

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  // nodes = []
    let nodes = []
  //if (root)nodes.push(root)
    if (root) nodes.push(root)
  //while(nodes.length > 0)
    while(nodes.length > 0){
  // let temp = nodes.splice(0,nodes.len)
      let temp = nodes.splice(0,nodes.length)
  // for (i=0; i< temp.length ;i++)
      for (i=0; i< temp.length;i++){
  //  temp[i].next = temp[i+1] != undefined ? temp[i+1] : null
        if (temp[i] != null){
          temp[i].next = temp[i+1] != undefined ? temp[i+1] : null
          if (temp[i].left != null) nodes.push(temp[i].left)
          if (temp[i].right != null) nodes.push(temp[i].right)
        }
      }
    }
  //return root
    return root
  };

var connect = function(root) {
  if(root ==null)return null
  let nodes = [root]
  while(nodes.length >0){
    let temp = nodes.splice(0,nodes.length)
    for(let i = 0;i<temp.length;i++){
      let node = temp[i]
      node.next = temp[i + 1]
      if(node.left)nodes.push(node.left)
      if(node.right)nodes.push(node.right)
    }
  }
  return root
}
  