/*Best Time to Buy and Sell Stock II
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

Constraints:

1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
//brute force time O(N^N) Recursive function is called n^n times, space O(N) Depth of recursion is n.
var maxProfit = function(prices) {
    
    let dfs = (index) => {
        if(index>=prices.length) return 0
        let max = 0
        for(let i = index;i<prices.length;i++){
            let localProfit = 0
            for(let j= i+1;j<prices.length;j++) {
                if(prices[i] < prices[j]) {
                    let profit = dfs(j+1) + prices[j] - prices[i]
                    localProfit = Math.max(localProfit, profit)
                }
            }
            max = Math.max(max,localProfit)
        }
        return max
    }
    return dfs(0)
};

//math, if we peak every valley before peak, then we get the highest profit, the profit keeping for next highest peak always lesser than peak every one.
//time O(N) space O(1)
var maxProfit = function(prices) {
    let max = 0
    for(let i=1;i<prices.length;i++){
        let val = prices[i] - prices[i-1]
        if (val >0) max += val
    }
    return max
};


