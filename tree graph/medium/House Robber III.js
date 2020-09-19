/*House Robber III
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:

Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:

Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if(root == null) return 0
    let flag = true
    let stack = [root]
    let even = 0
    let odd = 0
    while(stack.length>0) {
        let currNodes = stack.splice(0,stack.length)
        let sum = 0
        for(let node of currNodes) {
            sum += node.val
            if(node.left)stack.push(node.left)
            if(node.right)stack.push(node.right)
        }
        if(flag == true) {
            even += sum
        } else {
            odd += sum
        }
        flag = !flag
    }
    return Math.max(even, odd)
};
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
}
let input = [4,1,null,2,null,3]
let build = (i) => {
    let val = input[i]
    if (val == null) return null
    let node = new TreeNode(val)
    node.left = build(i*2+1)
    node.right = build(i*2+2)
    return node
}
let tree = build(0)
console.log(tree);
console.log(rob(tree));
