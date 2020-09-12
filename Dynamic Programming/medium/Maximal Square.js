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
let input = [["1","0","1","0","0"],
             ["1","0","1","1","1"],
             ["1","1","1","1","1"],
             ["1","0","0","1","0"]]
console.log(maximalSquare(input));