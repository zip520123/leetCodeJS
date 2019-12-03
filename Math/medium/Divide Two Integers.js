/*Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.*/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  min = -(2 ** 31)
  if (dividend == min && divisor == -1)return 2**31 - 1  
  return dividend / divisor | 0
};

var divide = function(dividend, divisor) {
  const Max = 2 ** 31 - 1
  const Min = -(2 ** 31) 
  if (dividend >= Max && divisor == 1) return Max
  if (dividend <= Min && divisor == -1) return Max

  sign = 1
  if (dividend < 0 ^ divisor < 0){
    sign = -1
  }
  
  dend = Math.abs(dividend)
  div = Math.abs(divisor)
  quo = 0

  while(dend >= div){
    shift = 0
    temp = div 

    //if using divisor<<1, will overflow, so think in the opposite way
    while(temp <= (dend >> 1)){
      shift++
      temp <<= 1
    }

    dend -= temp
    quo+= (1 << shift)
  }
  
  return quo * sign
}
