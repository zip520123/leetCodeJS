/*Surrounded Regions

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length == 0 || board[0].length == 0) return 
    let dfs = (x,y) => {
        if (x<0 || y<0||x>=board.length||y>=board[x].length|| board[x][y] == "*" || board[x][y] == "X") return
        if (board[x][y] == "O") {
            board[x][y] = "*"
            dfs(x+1,y)
            dfs(x,y+1)
            dfs(x-1,y)
            dfs(x,y-1)
        }
    }
        
    for(let i=0;i<board[0].length;i++){
        dfs(0,i)
        dfs(board.length - 1,i)
    }
    
    for(let i=0;i<board.length;i++){
        dfs(i,0)
        dfs(i,board[board.length - 1].length - 1)
    }

    
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<board[i].length;j++){
            if (board[i][j] == "O") board[i][j] = "X"
            if (board[i][j] == "*") board[i][j] = "O"
        }    
    }
    
};

let input = [["X","X","X","X"],
             ["X","O","O","X"],
             ["X","X","O","X"],
             ["X","O","X","X"]]

solve(input)
console.log(input);