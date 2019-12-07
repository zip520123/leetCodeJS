/*Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  //each islend became sea
  res = 0
  for(i=0;i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
      if (grid[i][j] == 1) {
        res ++
        bfs(grid,i,j)
      } 
    }
  }
  return res
}
const bfs = (grid,i,j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >=grid[i].length || grid[i][j] == 0) return
  grid[i][j] = 0
  bfs(grid,i-1,j)
  bfs(grid,i,j+ 1)
  bfs(grid,i+1,j)
  bfs(grid,i,j-1)
}

// iterative
var Node = function(i,j) {
  this.i = i
  this.j = j
}

var numIslands = function(grid) {
  res = 0
  for(i=0;i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
       if (grid[i][j] == 1){
         res ++
         stack = [new Node(i,j)]
         for(k=0;k<stack.length;k++){
           let node = stack[k]
           if (node.i >= 0 && node.j>= 0 && node.i < grid.length && node.j < grid[i].length && grid[node.i][node.j]==1){
             grid[node.i][node.j] = 0

             stack.push(new Node(node.i + 1,node.j), new Node(node.i, node.j + 1), new Node(node.i - 1,node.j), new Node(node.i,node.j - 1))
           }
         }
       }
    }
  }
  return res
}


/*def numIslands(self, grid):
    # BFS
    if not grid:
        return 0
    m, n, count = len(grid), len(grid[0]), 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == "1":
                count += 1
                stack = [(i,j)]
                for ii,jj in stack:
                    if 0<=ii<m and 0<=jj<n and grid[ii][jj] == "1":
                        grid[ii][jj] = "2"
                        stack.extend([(ii+1,jj),(ii-1,jj),(ii,jj-1),(ii,jj+1)])
    return count

    # DFS
    if not grid:
        return 0
    m, n, count = len(grid), len(grid[0]), 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == "1":
                count += 1
                stack = [(i,j)]
                while stack:
                    ii, jj = stack.pop()
                    if 0<=ii<m and 0<=jj<n and grid[ii][jj] == "1":
                        grid[ii][jj] = "2"
                        stack.extend([(ii+1,jj),(ii-1,jj),(ii,jj-1),(ii,jj+1)])
    return count

    ## recursive DFS
    def dfs(grid, i,j):
        if 0<=i<m and 0<=j<n and grid[i][j] == "1":
            grid[i][j] = "2"
            dfs(grid, i-1, j)
            dfs(grid, i+1, j)
            dfs(grid, i, j-1)
            dfs(grid, i, j+1)
    if not grid:
        return 0
    m, n, count = len(grid), len(grid[0]), 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == "1":
                count += 1
                dfs(grid, i, j)
    return count*/