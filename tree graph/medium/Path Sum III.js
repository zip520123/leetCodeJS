/*Path Sum III
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11*/
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
 * @param {number} sum
 * @return {number}
 */
//brute force
//time O(n^2) space recursion O(n) + list O(n)
//Time: O(n^2) in worst case (no branching); O(nlogn) in best case (balanced tree).
var pathSum = function(root, sum) {
    let res = 0
    let list = []
    let dfs = (curr) => {
        if (curr == null) return 
        list.push(curr.val)
        dfs(curr.left) 
        dfs(curr.right)
        let count = 0
        for(let i=list.length-1;i>=0;i--){
            count+=list[i]
            if(count==sum)res++
        }
        list.pop()
    }
    dfs(root)
    return res
};


//Memorization of path sum: O(n)
//time O(n) space O(n)

//---THIS CODE NOT WORKING---
// var pathSum = function(root, sum) {
//     let res = 0
//     let cache = {}
//     let dfs = (curr,currPathSum) => {
//         if(curr == null) return
//         currPathSum += curr.val
//         let oldPathSum = currPathSum - sum
//         res += cache[oldPathSum] ? cache[oldPathSum] : 0
//         cache[currPathSum] = cache[currPathSum] ? cache[currPathSum]+1 : 1 
//         dfs(curr.left, currPathSum)
//         dfs(curr.right, currPathSum)
//         cache[currPathSum] = -1
//     }
//     dfs(root,0)
//     return res
// }