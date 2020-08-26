/*Longest Increasing Path in a Matrix
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
//time O(N) space(N^N)  Time Limit Exceeded
var longestIncreasingPath = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return 0
    let res = 1
    let dfs = (x,y,curr,val) => {
        if(x<0||y<0||x>=matrix.length||y>=matrix[0].length||matrix[x][y]=="X"|| matrix[x][y] <= val) return curr
        
        let t = matrix[x][y]
        if (t > val) {
            curr++
            matrix[x][y] = "X"
            let left = dfs(x-1,y,curr,t)
            let right = dfs(x+1,y,curr,t)
            let top = dfs(x,y-1,curr,t)
            let bottom = dfs(x,y+1,curr,t)
            
            matrix[x][y] = t
            let res = Math.max(left,right,top,bottom)
            
            return res
        } else {
            return curr
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            
            let left = dfs(i-1,j,1,matrix[i][j])
            let right = dfs(i+1,j,1,matrix[i][j])
            let top = dfs(i,j-1,1,matrix[i][j])
            let bottom = dfs(i,j+1,1,matrix[i][j])
            let curr = Math.max(left,right,top,bottom)
            res = Math.max(curr,res)
        }
    }
    return res
};

//with mamorize time O(N) space O(N)
var longestIncreasingPath = function(matrix) {
    if(matrix.length ==0 )return 0
    let list = [[1,0],[-1,0],[0,1],[0,-1]]
    let res = 0
    let set = {}
    let dfs = (x,y,prev) => {
        if(x<0||y<0||x>=matrix.length||y>=matrix[x].length||matrix[x][y]<=prev) return 0
        if (set[x+":"+y]) return set[x+":"+y]
        let local = 0
        for(let dir of list) {
            local = Math.max(local, dfs(x+dir[0],y+dir[1],matrix[x][y]) + 1)
        }
        set[x+":"+y] = local
        res = Math.max(res,local)
        return local
    }
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(set[i+":"+j]==null) dfs(i,j,-Infinity)
        }
    }
    return res 
};

let input = [[9,9,4],
             [6,6,8],
             [2,1,1]]
// let input = [[1,2]]
console.log(longestIncreasingPath(input));
