/*Basic Calculator II
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.*/
/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
    s+="+"
    let num=0, sign="+", sum = 0, lastVal = 0
    
    for(let i=0;i<s.length;i++) {
        if(s[i]==" ") continue
        if(s[i]>=0 && s[i]<=9) {
            num = num*10 + s.charCodeAt(i) - "0".charCodeAt()
        } else {
            if(sign == "*") {
                lastVal *= num
            }
            else if(sign=="/") {
                lastVal = (lastVal / num) | 0
            }
            else if(sign=="+") {
                sum += lastVal
                lastVal=num
            }
            else if(sign=="-") {
                sum += lastVal
                lastVal = -1 * num
            }
            num = 0
            sign = s[i]
        }
    }
    return sum + lastVal
};
let input = "3+2*2"
// let input = "1-1"
console.log(calculate(input));