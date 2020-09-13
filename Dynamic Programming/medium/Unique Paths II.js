/*A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
//time O(n) or O(obstacleGrid.m * obstacleGrid.n)
//space O(1) or O(obstacleGrid)

var uniquePathsWithObstacles = function(obstacleGrid) {
    let grid = obstacleGrid
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(i==0&&j==0) {
                grid[i][j] = grid[i][j] == 1 ? 0 : 1
            }else if(i==0){
                grid[i][j] = grid[i][j] == 1 ? 0 : grid[i][j-1]
            }else if(j==0){
                grid[i][j] = grid[i][j] == 1 ? 0 : grid[i-1][j]
            }else {
                grid[i][j] = grid[i][j] == 1 ? 0 : grid[i-1][j] + grid[i][j-1]
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};

//time O(n)
//space O(n) or space(2n)
function uniquePathsWithObstacles(obstacleGrid) {
  const cols = obstacleGrid[0].length;
  var arr = Array(cols).fill(0).fill(1, 0, 1);
  
  for (var r = 0; r < obstacleGrid.length; r++) {
      for (var c = 0; c < obstacleGrid[0].length; c++) {
          arr[c] = obstacleGrid[r][c] === 1 ? 0 : (arr[c] + (arr[c - 1] || 0));
      }
  }
  return arr[cols - 1];
}