/*Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0
    const count = (num) => {
        let sum = 0
        for ( row of matrix) {
            let left = 0
            let right = matrix.length
            
            while ( left < right ) {
                let mid = left + ((right - left)>>1)
                if (num >= row[mid]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            sum += left 
          }
        return sum
    }
    
    let left = matrix[0][0]
    let right = matrix[matrix.length - 1][matrix[0].length - 1]
    
    while(left < right) {
        let mid = left + ((right - left)>>1)
        if (k > count(mid)) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    return left
  
};
let input = [[1,5,9],[10,11,13],[12,13,15]]
let input2 = 8
// let input = [[1,2],[1,3]]
// let input2 = 4
console.log(kthSmallest(input,input2));
