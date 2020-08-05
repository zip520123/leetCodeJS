/*The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.*/
/**
 * @param {number} n
 * @return {number}
 */
//time O(3^n)
//space O(3^n)
var tribonacci = function(n) {
    if (n==0)return 0
    if(n==1 || n==2)return 1
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1)
};
//f(t) = f(t-3)+f(t-2)+f(t-1)

//arr
//time O(n)
//space O(n)
var tribonacci = function(n) {
    
    let arr = [0,1,1]
    for(let i = 3;i<=n;i++){
        arr[i] = arr[i-3] + arr[i-2] + arr[i-1]
    }
    return arr[n]
};

//time O(n)
//space O(1)
var tribonacci = function(n) {
    if(n== 0)return 0
    if(n==1||n==2)return 1
    let t0 = 0
    let t1 = 1
    let t2 = 1
    
    for(let i = 3;i<=n;i++){
        let temp = t0
        t0 = t1
        t1 = t2
        t2 = temp + t0 + t1
    }
    return t2
};
