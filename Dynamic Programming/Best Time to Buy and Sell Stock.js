/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     // find every days profit
//     var profit = 0
//     for (let i = 0; i < prices.length; i += 1) {
//       var buyDay = prices[i]
//       for (let j = i + 1; j < prices.length; j+= 1) {
//         var sellDay = prices[j]
//         if ((sellDay - buyDay) > profit ) {
//           profit = sellDay - buyDay
//         }
//       }
//     }
//     return profit
// };
// time O(n^2)
// space(1)
//---
var maxProfit = function(prices) {
  //find minPrice and caculator maxProfit at the sometime
  var minPrice = Math.pow(2,31)
  var maxProfit = 0
  prices.forEach( (val) => {
    minPrice = val < minPrice ? val : minPrice
    var currentProfit = val - minPrice
    maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit
  })
  return maxProfit
}
var a = [7,1,5,3,6,4]
maxProfit(a)