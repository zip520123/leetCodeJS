/*Game of Life
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let nb = []
    board.forEach((n)=>{
        nb.push(n.slice())
    })
    let neilist = [-1,0,1]
    for(let row=0;row<board.length;row++) {
        for (let col=0;col<board[0].length;col++) {
            let cell = nb[row][col]
            let liveNab = 0
            for(let i=0;i<neilist.length;i++){
                for(let j=0;j<neilist.length;j++){
                    let currentRow = row + neilist[i]
                    let currentCol = col + neilist[j]
                    if (currentRow < 0 || currentCol < 0 || currentRow >= board.length || currentCol >= board[0].lenght || (neilist[i] == 0 && neilist[j] == 0)) {
                        continue
                    }
                    if (nb[currentRow][currentCol] == 1){
                        liveNab += 1
                    }
                }
            }
            
            if ((cell == 1) && liveNab < 2) {
                board[row][col] = 0
            }
            if ((cell == 1) && liveNab >= 2 && liveNab <=3) {
                board[row][col] = 1
            }
            if ((cell == 1) && liveNab > 3) {
                board[row][col] = 0
            } 
            if ((cell == 0) && liveNab == 3) {
                board[row][col] = 1
            }
        }
    }
    
};


let input = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// let input = [[0,1]]
gameOfLife(input)
console.log(input)