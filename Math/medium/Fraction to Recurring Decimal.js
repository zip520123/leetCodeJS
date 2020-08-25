/*Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"

Hide Hint #1  
No scary math, just apply elementary math knowledge. Still remember how to perform a long division?

Hide Hint #2  
Try a long division on 4/9, the repeating part is obvious. Now try 4/333. Do you see a pattern?

Hide Hint #3  
Notice that once the remainder starts repeating, so does the divided result.

Hide Hint #4  
Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.
*/
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator == 0)return "0"
  let s = ""
  if(Math.sign(numerator) != Math.sign(denominator) ){
      s += "-"
  }
  let n = Math.abs(numerator)
  let d = Math.abs(denominator)

  s += Math.floor(n / d) // can't use | 0, because 2147483648 | 0 = -2147483648
  n %= d
  
  if (n == 0)return s
  s += "."
  
  let dict = {}
  while(n != 0){
      dict[n] = s.length
      n *= 10
      s += Math.floor(n / d)
      n %= d
      
      if(dict[n] != null){
          return `${s.slice(0,dict[n])}(${s.slice(dict[n])})`
      }
  }
  return s
};

//try fractionToDecimal(23,94) LOL
