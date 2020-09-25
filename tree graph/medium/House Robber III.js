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
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
//time O(n^2) space O(n) optimal "substructure" + "overlapping of subproblems
var rob = function(root) {
    if (root == null) return 0
    let total = 0
    if(root.left) {
        total += rob(root.left.left) + rob(root.left.right)
    }
    if(root.right) {
        total += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(root.val+ total, rob(root.left) + rob(root.right))
};

//dp time O(n) space O(n + space)

var rob = function(root) {
    let map = new Map()
    let subRob = (root) => {
        if (root == null) return 0
        if(map.has(root)) return map.get(root)
        let total = 0
        if(root.left) {
            total += subRob(root.left.left) + subRob(root.left.right)
        }
        if(root.right) {
            total += subRob(root.right.left) + subRob(root.right.right)
        }
        let val = Math.max(root.val+ total, subRob(root.left) + subRob(root.right))
        map.set(root, val)
        return val 
    }
    return subRob(root)
};

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
