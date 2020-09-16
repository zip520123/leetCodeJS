/*Daily Temperatures
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/
/**
 * @param {number[]} T
 * @return {number[]}
 */
//brute force time O(n^2) space O(1)
var dailyTemperatures = function(T) {
    let res = []
    out: for(let i=0;i<T.length-1;i++){
        for(let j=i+1;j<T.length;j++){
            if(T[i] < T[j]) {
                res.push(j-i)
                continue out
            }    
        }
        res.push(0)
    }
    res.push(0)
    return res
};

//stack time O(n) space O(n)
var dailyTemperatures = function(T) {
    let stack = []
    let res = []
    for(let i=T.length-1;i>=0;i--){
        while(stack.length>0 && T[stack[stack.length-1]] <= T[i]) {
            stack.pop()
        }
        res[i] = stack.length==0 ? 0:stack[stack.length-1] - i
        stack.push(i)
    }    
    return res
};