/*Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
//time O((m*n)^2) space O(1)
var maximalSquare = function(matrix) {
    let max = 0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] == "1"){
                let sqlen = 1    
                let flag = true
                out: while(i+sqlen <matrix.length && j+sqlen < matrix[i+sqlen].length&& flag) {
                    for(let k=i;k<=i+sqlen;k++){
                        if(matrix[k][j+sqlen] == "0"){
                            flag = false
                            break out
                        }    
                    }
                    for(let k=j;k<=j+sqlen;k++){
                        if(matrix[i+sqlen][k]=="0"){
                            flag = false
                            break out
                        }
                    }
                    if(flag == true) sqlen++
                }   
                
                max = max > sqlen ? max :sqlen
            }
        }
    }
    
    return max * max
};

//dp 2d time O(m*n) space O(m*n)
var maximalSquare = function(matrix) {
    if(matrix.length == 0) return 0
    let dp = new Array(matrix.length+1)
    let col = matrix[0].length
    for(let i=0;i<dp.length;i++){
        dp[i] = new Array(col+1).fill(0)
    }
    let max = 0
    for(let i=1;i<=matrix.length;i++) {
        for(let j=1;j<=matrix[i-1].length;j++){
            if(matrix[i-1][j-1] == "1"){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1    
                max = Math.max(max,dp[i][j])
            } 
        }
    }
    return max * max
};

//dp 1d time O(m*n) space O(n)
var maximalSquare = function(matrix) {
    if(matrix.length == 0) return 0
    let dp = new Array(matrix[0].length+1).fill(0)
    
    let max = 0
    let prev = 0
    for(let i=1;i<=matrix.length;i++) {
        for(let j=1;j<=matrix[0].length;j++){
            let temp = dp[j]
            if(matrix[i-1][j-1] == "1"){
                let curr = Math.min(dp[j],dp[j-1],prev) + 1
                dp[j] = curr
                max = Math.max(max,curr)
            } else {
                dp[j] = 0
            }
            prev = temp
        }
    }
    return max * max
};


// let input = [["1","0","1","0","0"],
//              ["1","0","1","1","1"],
//              ["1","1","1","1","1"],
//              ["1","0","0","1","0"]]
let input = [["0","1"]]
console.log(maximalSquare(input));