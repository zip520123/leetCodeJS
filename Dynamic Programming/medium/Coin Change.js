/*You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//brute force
//time O(S ^ N)
//space O(S ^ N)
var coinChange = function(coins, amount) {
  let res = [[]]
  let min = Infinity

  while(1){
    let nocoin = true
    temp = res.splice(0,res.length)
    temp.forEach(list=>{
      let sum = 0
      list.forEach(coin=>{
        sum += coin
      })
      if (sum == amount){
        res.push(list)
        min = Math.min(list.length)
        return
      }
      coins.forEach(coin=>{
        if (coin < list[list.length - 1]){
          return
        }
        if (coin + sum <= amount) {
          nocoin = false
          let char = list.slice()
          char.push(coin)
          res.push(char)
        }
      })
    })

    if (nocoin) {
      res = temp
      break
    }
  }
  
  res.forEach(list=>{
    let sum = 0
    list.forEach(coin=>{
      sum+=coin
    })
    if (sum == amount){
      min = Math.min(min,list.length)
    }
  })
  if (min == Infinity){
    min = -1
  }
  return min
}
//top down
//time O(amount * coins.length)
//space O(amount)
var coinChange = function(coins,amount) {
  if (amount < 1)return 0
  let arr = []
  for(let i=0;i<amount;i++){
    arr.push(0)
  }
  return coinChange1(coins,amount,arr)
}
const coinChange1 = (coins,rem,arr) =>{
  if(rem < 0)return -1
  if(rem == 0)return 0
  if(arr[rem -1] != 0)return arr[rem -1]
  let min = Infinity
  coins.forEach(coin=>{
    let res = coinChange1(coins, rem - coin, arr)
    if (res >=0 && res < min){
      min = res + 1
    }
  })
  arr[rem -1] = min == Infinity ? -1 : min
  return arr[rem -1]
}

//bottom top
//time O(amount * coins)
//space O(amount + 1)
var coinChange = function(coins,amount) {
  let dp = []
  for(let i =0;i<=amount;i++){
    dp.push(amount+1)
    coins.forEach(coin=>{
      if(coin <= i){
        dp[i] = Math.min(dp[i],dp[i - coin] + 1)
      }
    })
  }
  return dp[amount] > amount ? -1 : dp[amount]

}