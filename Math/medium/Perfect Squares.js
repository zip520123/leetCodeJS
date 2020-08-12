/*Perfect Squares

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/
/**
 * @param {number} n
 * @return {number}
 */
//recerution Time Limit Exceeded
// var numSquares = function(n) {
//     let dfs = (n)=> {
//         if(n <= 3) return n
//         let res = n
//         for(let i=1;i*i<=n;i++){
//             res = Math.min(res, 1+ dfs(n- i*i))
//         }
//         return res
//     }
//     return dfs(n)
// };

//recursion + dp
var numSquares = function(n) {
    let dp = [0]
    let dfs = (n)=> {
        if(n <= 3) return n
        if (dp[n]) return dp[n]

        let res = n
        for(let i=1;i*i<=n;i++){
            res = Math.min(res, 1+ dfs(n- i*i))
        }
        dp[n] = res
        return res
    }
    return dfs(n)
};

//dp
var numSquares = function(n) {
    if(n <= 3) return n
    let dp = [0]
    for(let i=1;i<=n;i++){
        dp[i] = i
        for(let j=1;j*j<=i;j++){
            dp[i] = Math.min(dp[i] , 1+ dp[i-j*j])
        }
    }
    return dp[n]
};

