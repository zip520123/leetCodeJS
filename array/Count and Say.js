/*The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
   Show Hint #1  

   The following are the terms from n=1 to n=10 of the count-and-say sequence:
 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211

   Hide Hint #2  
To generate the nth term, just count and say the n-1th term.

---
"Count and Say problem" Write a code to do following:

n String to print
0 => 1
1 => 1 1
2 => 2 1
3 => 1 2 1 1
4 => 
Base case: n = 0 print "1"
for n = 1, look at previous string and write number of times a digit is seen and the digit itself. In this case,

digit 1 is seen 1 time in a row... so print "1 1"

for n = 2, digit 1 is seen two times in a row, so print "2 1"

for n = 3, digit 2 is seen 1 time and then digit 1 is seen 1 so print "1 2 1 1"

for n = 4 you will print "1 1 1 2 2 1"

Consider the numbers as integers for simplicity. e.g. if previous string is "10 1" then the next will be "1 10 1 1" and the next one will be "1 1 1 10 2 1"

*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let s = "1"
  for(let i=0;i<n-1;i++){
    let str = s.split("")
    s = ""
    let num = str[0]
    let count = 1
    for(let j=1;j<str.length;j++){
      if(num != str[j]){
        s += count
        s += num
        count = 1
        num = str[j]
      }else{
        count ++
      }
    }
    s += count
    s += num
  }
  return s
};
var countAndSay = function(n) {
  let s = "1"
  for(let i=0;i<n-1;i++){
      let str = s
      s = ""
      let count=0, c = str[0]
      for(let j=0;j<str.length;j++){
          if(str[j] == c) {
              count++
          } else {
              s += count + c
              count = 1
              c = str[j]
          }
      }
      s += count + c
  }
  return s
};