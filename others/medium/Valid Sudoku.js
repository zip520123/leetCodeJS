/*Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
//time O(N) space O(N)
var isValidSudoku = function(board) {
    let set = new Set()
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<9;j++){
            let val = board[i][j]
            if (val != ".") {
                if(set.has(val+"x"+i)) return false
                set.add(val+"x"+i)
                if(set.has(val+"y"+j)) return false
                set.add(val+"y"+j)
                let boxVal = val+"box"+ ((i / 3)|0) + ":" + ((j/3)|0)
                if (set.has(boxVal)) return false
                set.add(boxVal)
                
            }
        }
    }
    return true
};

var isValidSudoku = function(board) {
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]!= "."){
                let t = board[i][j]
                board[i][j] = "."
                if (check(board,i,j,t)==false){
                    return false
                }
                board[i][j] = t
            }
        }
    }
    return true
};

var check = (board,x,y,num) => {
    for(let i=0;i<9;i++){
        if (board[x][i] == num) return false
        if (board[i][y] == num) return false
        if (board[(i/3|0) + (x/3|0)*3][(i%3) + (y/3|0)*3] == num) return false
    }
    return true
}

let input = [[".",".",".",".",".",".",".",".","."],
             [".",".",".",".",".","6",".",".","."],
             [".",".",".",".",".",".",".",".","."],
             [".",".",".",".","8",".",".",".","."],
             ["9",".",".",".","7","5",".",".","."],
             [".",".",".",".","5",".",".","8","."],
             [".",".","9",".",".",".",".",".","."],
             ["2",".","6",".",".",".",".",".","."],
             [".",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(input));