/*Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for(let i=0;i<board.length;i++){
      for(let j=0;j<board[i].length;j++){
          let found = dfs(board,word,i,j,0)
          if(found)return true
      }
  }
  return false
};

var dfs = (board, word, x, y, i) => {
  
  if(x<0||y<0||x>=board.length||y>=board[0].length||board[x][y] =="#")return false
  if(word[i]!=board[x][y])return false
  if(i == word.length - 1) return true
  
  let temp = board[x][y]
  board[x][y] = "#"
  let ans = dfs(board,word,x + 1,y,i + 1) ||
      dfs(board,word,x - 1,y,i + 1) || 
      dfs(board,word,x ,y + 1,i + 1) || 
      dfs(board,word,x ,y - 1,i + 1)
  
  board[x][y]=temp
  return ans
}

var exist = (board, word) => {
  for(let i = 0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      let found = dfs(board,word,i,j,0)
      if (found)return true
    }
  }
  return false
}
var dfs = (board, word, x,y,i) => {
  if(x<0||y<0||x>=board.length||y>=board[0].length||board[x][y]==-1)return false
  if(word[i] != board[x][y])return false
  if(i == word.length - 1)return true
  let temp = board[x][y]

  board[x][y] = -1
  let ans = 
  dfs(board,word,x,y+1,i+1) ||
  dfs(board,word,x,y-1,i+1) ||
  dfs(board,word,x+1,y,i+1) ||
  dfs(board,word,x-1,y,i+1) 
  board[x][y] = temp
  
  return ans
}
