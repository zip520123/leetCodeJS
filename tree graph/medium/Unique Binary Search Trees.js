/*Unique Binary Search Trees
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 

Constraints:

1 <= n <= 19
*/
/**
 * @param {number} n
 * @return {number}
 */
//time O(n^2) space O(n)
//G(n) = F(1,n) + F(2,n) + F(3,n) +... + F(n-1,n)
//F(i,n) = G(i-1) * G(n-i)
//G(n) = G(1-1) * G(n-1) + G(2-1) * G(n-2) +... + G(n-1) * G(n-n)
var numTrees = function(n) {
    let g = new Array(n+1).fill(0)
    g[0] = 1
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++) {
            g[i]+= g[j-1] * g[i-j]
        }
    }
    
    return g[n]
};