/*Search a 2D Matrix 
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    if (matrix.length == null ||matrix[0].length == null)return false
    let left = 0
    let r = matrix.length
    let c = matrix[0].length
    let right = r * c - 1
    
    while(left < right) {
        let mid = left + ((right - left)>>1)
        let val = matrix[((mid/c)|0)][mid%c]
        
        if (val < target) {
          left = mid + 1
        } else {
          right = mid
        }
    }
    
    console.log(left % c);
    console.log(matrix[((left/c)|0)][left%c]);
    return matrix[((left/c)|0)][left%c] == target
    
};

let input = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
let input2 = 3

console.log(searchMatrix(input,input2));