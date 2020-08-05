/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step*/

/**
 * @param {number} n
 * @return {number}
 */

//Brute Force
//f(n) = f(n - 1) + f( n - 2)
//f(1) = 1
//f(2) = 1
var climbStairs = function(n) {
  if (n == 1) return 1
  var a = 1
  var b = 2

  for (i = 3; i <= n; i+=1){
    var t = a + b
    a = b
    b = t
  }
  return b
};

//3 different step { 1, 3, 5 }
//f(n) = f(n - 1) + f(n - 3) + f(n - 5)
//f(1) = 1
//f(3) = 1
//f(5) = 1
var climbStairs = (n) => {
  if (n <= 0) return 0
  if (n==1 || n==3 || n == 5) return 1
  return climbStairs(n - 1) + climbStairs(n - 3) + climbStairs(n - 5)
}

var climbStairs = (n) => {

  let dp = [1]
  
  const steps = [1,3,5]
  for (let i=1;i<=n;i++) {
    let total = 0
    steps.forEach((step)=>{
      if (i - step >= 0){
        total += dp[i - step]
      } 
    })
    dp[i] = total
  }
  return dp[n]
}