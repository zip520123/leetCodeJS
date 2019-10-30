// Example 1:

// Input: "42"
// Output: 42
// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
// Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// Example 4:

// Input: "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical
// digit or a +/- sign. Therefore no valid conversion could be performed.
// Example 5:

// Input: "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
// Thefore INT_MIN (−231) is returned.

var myAtoi = function(str) {
    var res = 0
    var sign = 1
    //trim space
    for (let i= 0; i <str.length; i+=1) {
      if (str[i] != " ") {
        str = str.substr(i)
        break
      }
    }
    //find sign
    if (str[0] == "+" || str[0] == "-") {
      if (str[0] == "-" ){
        sign = -1
      }
      str = str.substr(1)
    }
    //get number
    for(let i = 0; i < str.length; i+=1) {
      let char = str[i]
    if (!isNaN(Number(char)) && char != " ") {
        res = res * 10 + Number(char) 
      } else {
        break
      }
    }
    //check range
    let max = Math.pow(2,31) - 1
    let min = -Math.pow(2,31)
    res *= sign
    res = res < min ? min : res
    res = res > max ? max : res
    return res 
};

console.log(myAtoi("42") == 42)
console.log(myAtoi("   -42") == -42)
console.log(myAtoi("4193 with words") == 4193)
console.log(myAtoi("words and 987") == 0)
console.log(myAtoi("-91283472332") == -2147483648)
