/* Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
//brute force time O(2^n) space O(1)
var minPathSum = function(grid) {
    let res = Infinity
    
    let dfs = (x,y,sum) => {
        if(x>=grid.length || y==grid[0].length || sum >= res) return
        sum += grid[x][y]
        if(x==grid.length -1 && y==grid[0].length -1) {
            res = Math.min(sum,res)
            return
        }
        dfs(x+1,y,sum)
        dfs(x,y+1,sum)
    }
    
    dfs(0,0,0)
    
    return res
};

//dp time O(n*n) space O(n)
var minPathSum = function(grid) {
    let dp = new Array(grid.length)
    for(let i=0;i<dp.length;i++){
        dp[i] = []
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(i==0&&j==0) {
                dp[i][j] = grid[i][j]
            }else if(i==0) {
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }else if(j==0) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else {
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j]) + grid[i][j]
            }
            
        }
    }
    
    return dp[grid.length-1][grid[0].length-1]
};


let input = [[1,3,1],[1,5,1],[4,2,1]]
console.log(minPathSum(input));