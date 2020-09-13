/*Max Points on a Line
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
//time O(n^3) space O(1)
var maxPoints = function(points) {
    if (points.length < 2) return points.length
    let res = 0
    for(let i=0;i<points.length-1;i++){
        let p1x = points[i][0]
        let p1y = points[i][1]
        for(let j=i+1;j<points.length;j++){
            let p2x = points[j][0]
            let p2y = points[j][1]
            
            //p1y-p2y / p1x-p2x = y-p2y / x-p2x
            //left = p1y-p2y / p1x-p2x
            //right = y-p2y / x-p2x
            let left = (p1y-p2y) / (p1x-p2x)
            
            let currCount = 0
            for(let point of points) {
                
                let x = point[0]
                let y = point[1]
                let right = (y-p2y) / (x-p2x) 
                
                if (left == right || y==p2y && x==p2x) {
                    currCount++
                } else if (Number.isNaN(left) == true && Number.isNaN(right) == true) {
                    currCount++
                } 
            }
            res = Math.max(currCount,res)
        }
    }
    return res
};

// let input = [[1,1],[2,2],[3,3]]
let input = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
console.log(maxPoints(input));