/*Sudoku Solver
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */



var solveSudoku = function(board) {
    if(board.length ==0 || board[0].length == 0) return 
    dfs(board)
};
const dfs = (board) => {
    
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]=="."){
                for(let k=1;k<=9;k++){
                    if(checkBoard(board,k,i,j)){
                        board[i][j] = k + ""
                        if (dfs(board) == true) {
                            return true
                        } else {
                            board[i][j] = "."
                        }
                    } 
                }
                return false
            }
        }
    }
    return true
}

// const checkBoard = (board, num, row, col) => {
//     for(item of board) {
//         if (item[col] == num) return false
        
//     }
//     for(item of board[row]) {
//         if (item == num) return false
//     }
//     let box_x = ((row / 3) | 0) * 3
//     let box_y = ((col / 3) |0) * 3
//     for(let i=box_x;i<=box_x+2;i++){
//         for(let j=box_y;j<=box_y+2;j++){
            
//             if(board[i][j] == num) return false
//         }
//     }
//     return true
// }

const checkBoard = (board,num,row,col) => {
    for(let i=0;i<9;i++){
        if (board[i][col] == num) return false 
        if (board[row][i] == num) return false
        let box_x = ((row/3)|0) * 3
        let box_y = ((col/3)|0) * 3
        if (board[box_x + ((i /3)|0)][box_y + (i%3)] == num) return false //genius
    }
    return true
}


var isValidSudoku = (board) => {
    let set = new Set()
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let val = board[i][j] 
            if (val != '.') {
                let rowVal = val + "x" + i
                let colVal = val + "y" + j
                let boxVal = val + "x" + ((i / 3) | 0) + "y" + ((j/3)|0)
                if (set.has(rowVal)) {
                    console.log(rowVal);
                    return false
                }
                if (set.has(colVal)) {
                    console.log(colVal);
                    return false
                }
                if (set.has(boxVal)) {
                    console.log(boxVal);
                    return false
                }

                set.add(rowVal)
                set.add(colVal)
                set.add(boxVal)
            }
        }
    }
    return true
}

// let input = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
let input = [[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]

solveSudoku(input)
console.log(input);
console.log(isValidSudoku(input));
