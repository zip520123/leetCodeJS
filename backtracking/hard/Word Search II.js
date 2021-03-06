/*Word Search II

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.

*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

//  //dfs
// var findWords = function(board, words) {
//     let res = []
//     let passSet = new Set()
//     for (let i=0;i<board.length;i++) {
//         for(let j=0;j<board[i].length;j++){
//             passSet.add(board[i][j])
//         }
//     }
//     const dfs = (i,x,y,word) => {
//         if(x<0||y<0||x==board.length||y==board[0].length||board[x][y] == -1) return false
//         if(board[x][y] != word[i]) return false
//         if(i == word.length -1) return true
//         let temp = board[x][y]
//         board[x][y] = -1
//         let ans = dfs(i+1,x+1,y,word) || dfs(i+1,x-1,y,word) || dfs(i+1,x,y+1,word) || dfs(i+1,x,y-1,word)
//         board[x][y] = temp
//         return ans
//     }
    
//     outside: for(let k=0;k<words.length;k++) {
//         let word = words[k]
//         if(passSet.has(word[0])) {
//             for(let i=0;i<board.length;i++){
//                 for(let j=0;j<board[i].length;j++){
//                     if (dfs(0,i,j,word)) {
//                         res.push(word)
//                         continue outside
//                     }
//                 }
//             }
//         }
//     }
    
//     return res
// };

// //dfs + map


// var findWords = function(board, words) {
//     let res = []
//     let map = {}
    
//     for (let i=0;i<board.length;i++) {
//         for(let j=0;j<board[i].length;j++){
            
//             if (map[board[i][j]] == null) {
//                 map[board[i][j]] = [[i,j]]
//             } else {
//                 map[board[i][j]].push([i,j])
//             }
//         }
//     }
//     const dfs = (i,x,y,word) => {
//         if(x<0||y<0||x==board.length||y==board[0].length||board[x][y] == -1) return false
//         if(board[x][y] != word[i]) return false
//         if(i == word.length -1) return true
//         let temp = board[x][y]
//         board[x][y] = -1
//         let ans = dfs(i+1,x+1,y,word) || dfs(i+1,x-1,y,word) || dfs(i+1,x,y+1,word) || dfs(i+1,x,y-1,word)
//         board[x][y] = temp
//         return ans
//     }
    
//     outside: for(let k=0;k<words.length;k++) {
//         let word = words[k]
//         if (map[word[0]] != null) {
//             let points = map[word[0]]
//             for(let l=0;l<points.length;l++) {
//                 let point = points[l]
//                 let i = point[0]
//                 let j = point[1]
//                 if(dfs(0,i,j,word)) {
//                     res.push(word)
//                     continue outside
//                 }
//             }
//         }
        
//     }
//     return res
// };

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(board, words) {
    let res = []
    let trie = new Trie()
    
    words.forEach(word=>{
        let curr = trie
        for(let i=0;i<word.length;i++){
            let c = word[i]
            if (curr.next[c] == null) {
                curr.next[c] = new Trie()
            }
            curr = curr.next[c]
        }
        curr.word = word
    })
    
    let dfs = (x,y,curr) => {
        if (x<0||y<0||x==board.length|| y==board[0].length||board[x][y] == "£") return
        let c = board[x][y]
        if (curr.next[c] == null ) return 

        if (curr.next[c].word != null) {
            res.push(curr.next[c].word)
            curr.next[c].word = null
        }

        board[x][y] = "£"
        
        dfs(x+1,y,curr.next[c]) 
        dfs(x-1,y,curr.next[c]) 
        dfs(x,y-1,curr.next[c]) 
        dfs(x,y+1,curr.next[c])
        
        board[x][y] = c
        
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            (dfs(i,j,trie))
        }
    }   
    
    
    return res
};

var Trie = function(){
    this.next = {}
    this.word = null
}

// let input = [["a"]]
// let input2 = ["a"]
// let input = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
// let input2 = ["oath","pea","eat","rain"]

let input = [["a","b"],["c","d"]]
let input2 = ["ab","cb","ad","bd","ac","ca","da","bc","db","adcb","dabc","abb","acb"]
console.log(findWords(input,input2));