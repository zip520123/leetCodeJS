/*Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//time O(n*m)
//space O(1)
// var searchMatrix = function(matrix, target) {
//   for(let i=0;i<matrix.length;i++){
//       for(let j=0;j<matrix[i].length;j++){
//           if(matrix[i][j]==target)return true
//       }
//   }
//   return false
// };

//time O (n+m)
//space O(1)
/*We start search the matrix from top right corner, initialize the current position to top right corner, if the target is greater than the value in current position, then the target can not be in entire row of current position because the row is sorted, if the target is less than the value in current position, then the target can not in the entire column because the column is sorted too. We can rule out one row or one column each time, so the time complexity is O(m+n).
我們搜尋matrix從上右角落開始，如果目標比現在大，那目標必定不在這整行內，因為已經排序過，如果目標比較現在小，那目標也不在這column內，因為column已經排序過，我們每次loop可以排除一個row或是一個column
*/

var searchMatrix = function(matrix, target) {
  if(matrix.length == 0) return false
  let x = 0
  let y = matrix[0].length -1
  
  while(x<matrix.length&&y>=0){
      let curr = matrix[x][y]
      if(curr == target) return true
      if(curr>target) {
          y--
      }else{
          x++
      }
  }
  return false
};

let input = [[-1,3]]
let input2 = 3

console.log(searchMatrix(input,input2));


//time (log(nm))
//space (1)
