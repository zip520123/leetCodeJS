/*Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

In Pascal's triangle, each number is the sum of the two numbers directly above it.*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  for(let i=0;i<numRows;i++){
    let temp = []
    for(let j=0;j<=i;j++){
      if (j==0 || j==i){
        temp.push(1)
        continue
      }
      let pri = res[i - 1]
      temp.push(pri[j - 1]+ pri[j])
    }
    res.push(temp)
  }

  return res
};