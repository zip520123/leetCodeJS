/*Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?*/

/**
 * @param {number} n
 * @return {boolean}
 */

//time O(log(n))
var isPowerOfThree = function(n) {
  if (n < 1)return false
  let num = n
  while(num % 3 == 0){
    num /= 3
  }
  return num == 1
};

//time O(1)
var isPowerOfThree = function(n) {
  var crazyBigPowOfThree = Math.pow(3,20)
  return (n > 0 && crazyBigPowOfThree % n == 0)
}