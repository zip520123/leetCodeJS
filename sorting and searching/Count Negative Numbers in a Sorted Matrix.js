/*Count Negative Numbers in a Sorted Matrix

Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
Example 3:

Input: grid = [[1,-1],[-1,-1]]
Output: 3
Example 4:

Input: grid = [[-1]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
//brute force , time O(N), space O(1)
var countNegatives = function(grid) {
    let sum = 0
    for(let row of grid){
        for(let val of row){
            if (val <0) sum++
        }
    }
    return sum
};

//binary search, time O(logN), space O(1)
var countNegatives = function(grid) {
    let sum = 0
    for(let i=0;i<grid.length;i++){
        let row = grid[i]
        if(row[0] <0) {
            sum+= row.length
            continue
        }
        if(row[row.length - 1] >=0) {
            continue
        }
        
        let left = 0
        let right = row.length - 1
        
        while(left<right){
            let mid = left + ((right - left)>>1)
            if (row[mid] >= 0) {
                left = mid+1
            } else {
                right = mid
            }
        }
        
        sum += row.length - left
        
    }
    return sum
};